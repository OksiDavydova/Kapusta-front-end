import {ChangeBalanceDiv, ChangeBalanceSpan, ChangeBalanceInput, ChangeBalanceButton} from './ChangeBalance.styled'

function ChangeBalance() {
    return (
     <ChangeBalanceDiv>
         <ChangeBalanceSpan>
            <ChangeBalanceInput
                type="text"
                name="balance"
                id="balance"
                placeholder="00.00" />
            UAH
            </ChangeBalanceSpan>
        <ChangeBalanceButton>Подтвердить</ChangeBalanceButton>
     </ChangeBalanceDiv>
    );
  }
  export {ChangeBalance};