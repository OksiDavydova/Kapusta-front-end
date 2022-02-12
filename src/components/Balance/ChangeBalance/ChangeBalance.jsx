import { useState } from "react";
import { useSelector } from "react-redux";
import { getBalanceUser } from "../../../redux/getBalance/balance-selector";
import {
  ChangeBalanceWrapper,
  ChangeBalanceSpan,
  ChangeBalanceInput,
  ChangeBalanceButton,
  BalanceText,
} from "./ChangeBalance.styled";

function ChangeBalance() {
  const balance = useSelector(getBalanceUser);
  const [valueBalance, setValueBalance] = useState(0);

  const acceptButtonClick = () => {
    // Notify after good request
    console.log("click balance");
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
      {/* <>
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
        <ChangeBalanceButton type="button" onClick={acceptButtonClick}>
          Подтвердить
        </ChangeBalanceButton>
      </> */}
    </ChangeBalanceWrapper>
  );
}
export default ChangeBalance;
