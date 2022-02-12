import {
  ChangeBalanceWrapper,
  ChangeBalanceSpan,
  ChangeBalanceInput,
  ChangeBalanceButton,
  BalanceText,
} from "./ChangeBalance.styled";

function ChangeBalance() {
  const acceptButtonClick = () => {
    // Notify after good request
    console.log("click balance");
  };
  return (
    <ChangeBalanceWrapper>
      <BalanceText>Баланс:</BalanceText>
      <>
        <ChangeBalanceSpan>
          <ChangeBalanceInput
            type="text"
            name="balance"
            id="balance"
            placeholder="00.00"
          />
          UAH
        </ChangeBalanceSpan>
        <ChangeBalanceButton type="button" onClick={acceptButtonClick}>
          Подтвердить
        </ChangeBalanceButton>
      </>
    </ChangeBalanceWrapper>
  );
}
export default ChangeBalance;
