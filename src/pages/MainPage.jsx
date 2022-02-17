import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Media from "react-media";
// import { useSelector, useDispatch } from "react-redux";
import { Balance } from "../components/Balance";
import { TransactionTable } from "../components/TransactionTable";
import { NavigationMainMobile } from "../components/NavigationMobile";
import { TypeOperationMain } from "../components/TypeOperationMain";
import { FormComponent } from "../components/FormComponent";

import {
  ContentWrapper,
  Overlay,
  OverlayMobile,
  DesktopOverlayShadow,
} from "../components/Wrapper/Wrapper.styled";
import { SummaryTable } from "../components/Summary";

import { getUpdateBalanceUser } from "../redux/getBalance/balance-operation";
import { getUserTransaction } from "../redux/getTransaction/transaction-operation";

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUpdateBalanceUser());
    dispatch(getUserTransaction());
  }, [dispatch]);

  return (
    <ContentWrapper>
      <Balance />
      <Media
        query="(min-width: 768px)"
        render={() => (
          <>
            <TypeOperationMain />
            <DesktopOverlayShadow>
              <FormComponent />
              <Overlay>
                <TransactionTable />
                <SummaryTable />
              </Overlay>
            </DesktopOverlayShadow>
          </>
        )}
      />
      <Media
        query="(min-width: 320px) and (max-width: 767.98px)" //якщо не поставити .98 то таблиця при ширині 767 не відображається взагалі
        render={() => (
          <OverlayMobile>
            <TransactionTable />
            <NavigationMainMobile />
          </OverlayMobile>
        )}
      />
    </ContentWrapper>
  );
}
