import React, { useState } from "react";
import {
  TypeOperationWrapper,
  ChooseOperationButton,
} from "./TypeOperation.styled";

function TypeOperationMain({ onHandleClick, typeDefault }) {
  const [btnOperation, setBtnOperation] = useState(typeDefault);
  // const [data, setData] = useState(DBarray.costs);

  const changeTypeOperation = (e) => {
    switch (e.target.value) {
      case "доход":
        setBtnOperation(true);
        onHandleClick(btnOperation);
        // setData(DBarray.income);
        break;
      case "расход":
        setBtnOperation(false);
        onHandleClick(btnOperation);
        // setData(DBarray.costs);
        break;
      default:
        break;
    }
  };

  return (
    <TypeOperationWrapper>
      <>
        <ChooseOperationButton value="расход" onClick={changeTypeOperation}>
          расход
        </ChooseOperationButton>
        <ChooseOperationButton value="доход" onClick={changeTypeOperation}>
          доход
        </ChooseOperationButton>
      </>
    </TypeOperationWrapper>
  );
}
export default TypeOperationMain;
