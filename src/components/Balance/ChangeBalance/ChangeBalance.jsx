import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBalanceUser } from "../../../redux/getBalance/balance-selector";
import { getDate } from "../../../redux/setDate/date-selector";
import { getUpdateBalanceUser } from "../../../redux/getBalance/balance-operation";
import { getUserTransaction } from "../../../redux/getTransaction/transaction-operation";
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
  const balance = useSelector(getBalanceUser);
  const date = useSelector(getDate);
  //value from input
  const [valueBalance, setValueBalance] = useState("");

  useEffect(() => {
    dispatch(getUpdateBalanceUser());
  }, [dispatch]);
  // input
  const setBalance = e => {
    setValueBalance(e.target.value);
  };
  // form handle Submit
  const handleSubmit = async e => {
    e.preventDefault();
    // input value to number
    const fixBalanceValue = parseFloat(valueBalance).toFixed(2);

    if (isNaN(valueBalance) || !valueBalance) {
      toast.error(`проверте данные вы ввели: ${valueBalance}`);
      // setValueBalance("");
      return;
    }

    const dateForDB = date.replaceAll("/", "");
    const newTransaction = {
      date: dateForDB,
      description: "Пополнение баланса",
      category: "Доп. доход",
      value: fixBalanceValue,
      income: true,
    };

    const { status } = await axios.post("/api/v1/transactions", newTransaction);
    if (status === 201) {
      dispatch(getUpdateBalanceUser());
      dispatch(getUserTransaction());
      removeBalanceModal();
      setValueBalance("");
    }
  };

  const removeBalanceModal = () => {
    setShowBalanceModal(!showBalanceModal);
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
          <form onSubmit={handleSubmit}>
            <LabelBalance htmlFor="balance">
              <ChangeBalanceInput
                type="text"
                name="balance"
                // pattern="^[ 0-9]+$"
                placeholder="00.00"
                value={valueBalance}
                onChange={setBalance}
                autoComplete="off"
                autoFocus
              />
              <Span>UAH</Span>
            </LabelBalance>
            <ChangeBalanceButton type="submit">Подтвердить</ChangeBalanceButton>
          </form>
        </>
      )}

      {/* --------Modal------------- */}
      {showBalanceModal && !balance && (
        <ModalBalance onClose={removeBalanceModal} />
      )}
      {/* --------------------- */}
    </ChangeBalanceWrapper>
  );
}
export default ChangeBalance;
