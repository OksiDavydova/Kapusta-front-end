import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBalanceUser } from "../../../redux/getBalance/balance-selector";
import { getDate } from "../../../redux/setDate/date-selector";
import { getUpdateBalanceUser } from "../../../redux/getBalance/balance-operation";
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

function ChangeBalance() {
  const balance = useSelector(getBalanceUser);

  const date = useSelector(getDate);

  const [valueBalance, setValueBalance] = useState(0);
  const dispatch = useDispatch();

  const acceptButtonClick = async () => {
    // Notify after good request
    console.log("click balance");
    const dateForDB = date.replaceAll("/", "");
    const newTransaction = {
      date: dateForDB,
      description: "Пополнение баланса",
      category: "доп. доход",
      value: valueBalance,
      income: true,
    };
    const { status } = await axios.post("/api/v1/transactions", newTransaction);
    console.log(status);
    if (status === 201) {
      dispatch(getUpdateBalanceUser());
    }
  };

  const setBalance = e => {
    const conversionToNumber = Number(e.target.value);
    setValueBalance(conversionToNumber);
  };

  return (
    <ChangeBalanceWrapper>
      {balance > 0 ? (
        <OvalBalanceSpan>
          <BalanceTextOval>Баланс:</BalanceTextOval>
          <OvalBalanceDiv>{[balance, " ", "UAH"]}</OvalBalanceDiv>
        </OvalBalanceSpan>
      ) : (
        <>
          <BalanceText>Баланс:</BalanceText>
          <LabelBalance for="balance">
            <ChangeBalanceInput
              type="number"
              name="balance"
              id="balance"
              placeholder="00.00"
              onChange={setBalance}
            />

            <Span>UAH</Span>
          </LabelBalance>
          <ChangeBalanceButton type="button" onClick={acceptButtonClick}>
            Подтвердить
          </ChangeBalanceButton>
        </>
      )}
    </ChangeBalanceWrapper>
  );
}
export default ChangeBalance;
