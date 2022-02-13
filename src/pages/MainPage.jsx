import React, { useState } from "react";
import Media from "react-media";
import { Balance } from "../components/Balance";
import { TransactionTable } from "../components/TransactionTable";
import { Summary } from "../components/Summary";
import { NavigationMainMobile } from "../components/NavigationMobile";
import { FormComponent } from "../components/FormComponent";
import { ContentWrapper, Overlay } from "../components/Wrapper/Wrapper.styled";

export default function Main() {
  const [btnOperation, setBtnOperation] = useState(false);
  console.log(btnOperation)
  const changeTypeOperation = (e) => {
    switch (e.target.value) {
      case "доход":
        setBtnOperation(true);
        // setData(DBarray.income);
        break;
      case "расход":
        setBtnOperation(false);
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
            <Overlay>
              <FormComponent />
              <TransactionTable />
              <Summary />
            </Overlay>
          </>
        )}
      />
      <Media
        query="(min-width: 320px) and (max-width: 766px)"
        render={() => <TransactionTable />}
      />

      {/* open form for enter transaction */}
      <Media
        query="(min-width: 320px) and (max-width: 767px)"
        render={() => <NavigationMainMobile />}
      />

      {/* --open form for enter transaction ---*/}
    </ContentWrapper>
  );
}
