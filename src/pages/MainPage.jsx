import React, { useState } from "react";
import Media from "react-media";
import { useSelector, useDispatch } from "react-redux";
import { Balance } from "../components/Balance";
// import { TransactionTable } from "../components/TransactionTable";
import { Summary } from "../components/Summary";
import { NavigationMainMobile } from "../components/NavigationMobile";

import { FormComponent } from "../components/FormComponent"; // import Notify from "../services/toastify";
// import { TypeOperationMain } from "../components/TypeOperationMain";
import { ContentWrapper } from "../components/Wrapper/Wrapper.styled";
import { getTypeTransaction } from "../redux/typeTransaction/transaction-selector";
import { changeTypeTransaction } from "../redux/typeTransaction/transaction-slice";

export default function Main() {
  const transaction = useSelector(getTypeTransaction);
  const dispatch = useDispatch();

  const changeTypeOperation = e => {
    switch (e.target.value) {
      case "доход":
        dispatch(changeTypeTransaction(true));
        // setData(DBarray.income);
        break;
      case "расход":
        dispatch(changeTypeTransaction(false));
        // setData(DBarray.costs);
        break;
      default:
        break;
    }
  };

  return (
    <ContentWrapper>
      <Balance />
      <Media
        query="(min-width: 767px)"
        render={() => (
          <>
            <button value="расход" onClick={changeTypeOperation}>
              расход
            </button>
            <button value="доход" onClick={changeTypeOperation}>
              доход
            </button>
            <FormComponent />
          </>
        )}
      />

      {/* <TransactionTable /> */}
      {/* visible from breakpoint tablet */}
      <Media query="(min-width: 767px)" render={() => <Summary />} />

      {/* open form for enter transaction */}
      <Media
        query="(min-width: 320px) and (max-width: 767px)"
        render={() => <NavigationMainMobile />}
      />

      {/* --open form for enter transaction ---*/}
    </ContentWrapper>
  );
}
