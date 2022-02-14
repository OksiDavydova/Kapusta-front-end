import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Media from "react-media";
// import { useSelector, useDispatch } from "react-redux";
import { Balance } from "../components/Balance";
import { TransactionTable } from "../components/TransactionTable";
import { NavigationMainMobile } from "../components/NavigationMobile";
import { TypeOperationMain } from "../components/TypeOperationMain";
import { FormComponent } from "../components/FormComponent";
<<<<<<< HEAD
import {
  ContentWrapper,
  Overlay,
  OverlayMobile,
} from "../components/Wrapper/Wrapper.styled";
import { SummaryTable } from "../components/Summary";
=======
import { ContentWrapper, Overlay } from "../components/Wrapper/Wrapper.styled";

//import { getTypeTransaction } from "../redux/typeTransaction/transaction-selector";
//import { changeTypeTransaction } from "../redux/typeTransaction/transaction-slice";
import { SummaryTable } from "../components/Summary";
import { getUpdateBalanceUser } from "../redux/getBalance/balance-operation";
>>>>>>> 66cad16327949781b168eefc69a3a83153297a17

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUpdateBalanceUser());
  }, []);

  return (
    <ContentWrapper>
      <Balance />
      <Media
        query="(min-width: 768px)"
        render={() => (
          <>
            <TypeOperationMain />
            <FormComponent />
            <Overlay>
              <TransactionTable />
              <SummaryTable />
            </Overlay>
          </>
        )}
      />
      <Media
        query="(min-width: 320px) and (max-width: 767px)"
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
