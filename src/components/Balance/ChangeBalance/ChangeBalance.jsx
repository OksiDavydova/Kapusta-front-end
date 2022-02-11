import {
  ChangeBalanceWrapper,
  ChangeBalanceSpan,
  ChangeBalanceInput,
  ChangeBalanceButton,
} from "./ChangeBalance.styled";

function ChangeBalance() {
  const acceptButtonClick = () => {
    // Notify after good request
    console.log("click balance");
  };
  return (
    <ChangeBalanceWrapper>
      <ChangeBalanceSpan>
        <ChangeBalanceInput
          type="text"
          name="balance"
          id="balance"
          placeholder="00.00"
        />
        UAN
      </ChangeBalanceSpan>
      <ChangeBalanceButton type="button" onClick={acceptButtonClick}>
        Подтвердить
      </ChangeBalanceButton>
    </ChangeBalanceWrapper>
  );
}
export default ChangeBalance;
