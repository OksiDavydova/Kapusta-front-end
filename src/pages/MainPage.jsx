import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Media from "react-media";
// import { useSelector, useDispatch } from "react-redux";
import { Balance } from "../components/Balance";
import { TransactionTable } from "../components/TransactionTable";
import { NavigationMainMobile } from "../components/NavigationMobile";
import { TypeOperationMain } from "../components/TypeOperationMain";
import { FormComponent } from "../components/FormComponent";
import { transactionNotifyStatus } from "../redux/getTransaction/transaction-selector";
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
  const notify = useSelector(transactionNotifyStatus);
  const dispatch = useDispatch();
  console.log(notify);
  useEffect(() => {
    const { status, message } = notify;
    switch (status) {
      case "error":
        toast.error(message);
        break;

      case "success":
        toast.success(message);
        break;

      default:
        return;
    }
  }, [notify]);

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
