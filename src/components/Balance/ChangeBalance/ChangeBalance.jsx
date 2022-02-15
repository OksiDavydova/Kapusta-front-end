// import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBalanceUser } from "../../../redux/getBalance/balance-selector";
import { getDate } from "../../../redux/setDate/date-selector";
import {
  getUpdateBalanceUser,
  updateBalanceUserFirst,
} from "../../../redux/getBalance/balance-operation";
import { ModalBalance } from "../../Modal";
import {
  ChangeBalanceWrapper,
  ChangeBalanceInput,
  ChangeBalanceButton,
  Span,
  OvalBalanceSpan,
  OvalBalanceDiv,
  BalanceTextOval,
  BalanceText,
  LabelBalance,
} from "./ChangeBalance.styled";
import { toast } from "react-toastify";

function ChangeBalance() {
  const dispatch = useDispatch();
  const [showBalanceModal, setShowBalanceModal] = useState(true);
  const [valueBalance, setValueBalance] = useState(""); // input
  const balance = useSelector(getBalanceUser);
  const date = useSelector(getDate);
  console.log(valueBalance);

  useEffect(() => {
    dispatch(getUpdateBalanceUser());
  }, [dispatch]);

  const handleClick = async () => {
    // Notify after good request
    const dateForDB = date.replaceAll("/", "");
    const newTransaction = {
      date: dateForDB,
      description: "Пополнение баланса",
      category: "доп. доход",
      value: valueBalance,
      income: true,
    };
    dispatch(updateBalanceUserFirst(newTransaction));
    // console.log(status);
    // if (status === 201) {
    //   dispatch(getUpdateBalanceUser());
    //   removeBalanceModal();
    // }
  };

  // const enterKeyHandler = (e) => {
  //   console.log(e);
  //   if (e.code === "Enter") {
  //     const fixBalanceValue = parseFloat(e.target.value).toFixed(2);
  //     setValueBalance(fixBalanceValue);
  //     e.target.blur();
  //   }
  // };

  const setBalance = ({ target }) => {
    // const conversionToNumber = Number(e.target.value);
    const fixBalanceValue = parseFloat(target.value).toFixed(2);
    console.log(fixBalanceValue);
    if (isNaN(fixBalanceValue)) {
      toast.error("введите коректную сумму пополнения баланса");
      return;
    }
    setValueBalance(fixBalanceValue);
  };

  const removeBalanceModal = () => {
    setShowBalanceModal(false);
  };
  //const setBalance = e => {
  //const conversionToNumber = Number(e.target.value);
  //setValueBalance(conversionToNumber);

  return (
    <ChangeBalanceWrapper>
      {balance ? (
        <OvalBalanceSpan>
          <BalanceTextOval>Баланс:</BalanceTextOval>
          <OvalBalanceDiv>{[balance, " ", "UAH"]}</OvalBalanceDiv>
        </OvalBalanceSpan>
      ) : (
        <>
          <BalanceText>Баланс:</BalanceText>
          <LabelBalance htmlFor="balance">
            <ChangeBalanceInput
              type="text"
              name="balance"
              id="balance"
              // value={valueBalance}
              pattern="^[ 0-9]+$"
              placeholder="00.00"
              onChange={setBalance}
              // onKeyDown={enterKeyHandler}
            />

            <Span>UAH</Span>
          </LabelBalance>
          <ChangeBalanceButton type="button" onClick={handleClick}>
            Подтвердить
          </ChangeBalanceButton>
        </>
      )}

      {/* --------Modal------------- */}
      {/* //balance = 0 */}
      {showBalanceModal && <ModalBalance onClose={removeBalanceModal} />}
      {/* --------------------- */}
    </ChangeBalanceWrapper>
  );
}
export default ChangeBalance;
