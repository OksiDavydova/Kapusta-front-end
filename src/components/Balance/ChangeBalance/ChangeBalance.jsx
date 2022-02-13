import { useState } from "react";
import { useSelector } from "react-redux";
import { getBalanceUser } from "../../../redux/getBalance/balance-selector";
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
  // const balance = 0;

  const [valueBalance, setValueBalance] = useState(0);

  const acceptButtonClick = () => {
    // Notify after good request
    console.log("click balance");
  };

  const setBalance = (e) => {
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
