import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBalanceUser } from "../../../redux/getBalance/balance-selector";
import { getDate } from "../../../redux/setDate/date-selector";
import { getUpdateBalanceUser } from "../../../redux/getBalance/balance-operation";
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
  const [showBalanceModal, setShowBalanceModal] = useState(true);
  const balance = useSelector(getBalanceUser);
  const date = useSelector(getDate);
  const [valueBalance, setValueBalance] = useState(0);
  const dispatch = useDispatch();

  const handleClick = async () => {
    // Notify after good request

    if (isNaN(valueBalance) || !valueBalance) {
      toast.error("введите коректную сумму пополнения баланса");
      return;
    }

    const dateForDB = date.replaceAll("/", "");
    const newTransaction = {
      date: dateForDB,
      description: "Пополнение баланса",
      category: "доп. доход",
      value: valueBalance,
      income: true,
    };
    const { status } = await axios.post("/api/v1/transactions", newTransaction);

    if (status === 201) {
      dispatch(getUpdateBalanceUser());
      removeBalanceModal();
    }
  };

  // const enterKeyHandler = (e) => {
  //   console.log(e);
  //   if (e.code === "Enter") {
  //     handleClick();
  //   }
  // };

  const setBalance = ({ target }) => {
    // const conversionToNumber = Number(e.target.value);
    const fixBalanceValue = parseFloat(target.value).toFixed(2);
    if (isNaN(fixBalanceValue)) {
      toast.error("введите коректную сумму пополнения баланса");
      return;
    }
    setValueBalance(fixBalanceValue);
  };

  const removeBalanceModal = () => {
    setShowBalanceModal(false);

    //const setBalance = e => {
    //const conversionToNumber = Number(e.target.value);
    //setValueBalance(conversionToNumber);
  };

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
      {showBalanceModal && <ModalBalance onClose={removeBalanceModal} />}
      {/* --------------------- */}
    </ChangeBalanceWrapper>
  );
}
export default ChangeBalance;
