import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  TypeOperationWrapper,
  ChooseOperationButton,
} from "./TypeOperation.styled";
import { getTypeTransaction } from "../../redux/typeTransaction/transaction-selector";
import { changeTypeTransaction } from "../../redux/typeTransaction/transaction-slice";
import { colors } from "../../styles/utils";

function TypeOperationMain() {
  const transaction = useSelector(getTypeTransaction);
  const dispatch = useDispatch();

  const changeTypeOperation = e => {
    switch (e.target.value) {
      case "доход":
        dispatch(changeTypeTransaction(true));

        break;
      case "расход":
        dispatch(changeTypeTransaction(false));

        break;
      default:
        break;
    }
  };

  return (
    <TypeOperationWrapper>
      <>
        <ChooseOperationButton
          isActive={transaction ? colors.black : colors.orange}
          isBgActive={transaction ? colors.bgBtnPrimary : colors.bgBtnActive}
          value="расход"
          onClick={changeTypeOperation}
        >
          расход
        </ChooseOperationButton>
        <ChooseOperationButton
          isActive={transaction ? colors.orange : colors.black}
          isBgActive={transaction ? colors.bgBtnActive : colors.bgBtnPrimary}
          value="доход"
          onClick={changeTypeOperation}
        >
          доход
        </ChooseOperationButton>
      </>
    </TypeOperationWrapper>
  );
}
export default TypeOperationMain;

//  from Main Page
//  const transaction = useSelector(getTypeTransaction);
//   const dispatch = useDispatch();
//   console.log(transaction);
//   const changeTypeOperation = (e) => {
//     switch (e.target.value) {
//       case "доход":
//         dispatch(changeTypeTransaction(true));
//         // setData(DBarray.income);
//         break;
//       case "расход":
//         dispatch(changeTypeTransaction(false));
//         // setData(DBarray.costs);
//         break;
//       default:
//         break;
//     }
//   };

// {/* <button value="расход" onClick={changeTypeOperation}>
//   расход
// </button>
// <button value="доход" onClick={changeTypeOperation}>
//   доход
// </button> */}
