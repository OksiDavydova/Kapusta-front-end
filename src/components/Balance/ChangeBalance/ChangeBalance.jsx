import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBalanceUser } from "../../../redux/getBalance/balance-selector";
import { getDate } from "../../../redux/setDate/date-selector";
import { getUpdateBalanceUser } from "../../../redux/getBalance/balance-operation";
import {
  ChangeBalanceWrapper,
  ChangeBalanceSpan,
  ChangeBalanceInput,
  ChangeBalanceButton,
  BalanceText,
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
      <BalanceText>Баланс:</BalanceText>
      {balance > 0 ? (
        <ChangeBalanceSpan>
          <ChangeBalanceInput
            type="number"
            name="balance"
            id="balance"
            value={balance}
            disabled
          />
          UAH
        </ChangeBalanceSpan>
      ) : (
        <>
          <ChangeBalanceSpan>
            <ChangeBalanceInput
              type="number"
              name="balance"
              id="balance"
              placeholder="00.00"
              onChange={setBalance}
            />
            UAH
          </ChangeBalanceSpan>
          <ChangeBalanceButton
            type="button"
            onClick={acceptButtonClick}
            disabled={valueBalance > 0 ? false : true}
          >
            Подтвердить
          </ChangeBalanceButton>
        </>
      )}
    </ChangeBalanceWrapper>
  );
}
export default ChangeBalance;
