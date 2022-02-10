import {OvalBalanceSpan, OvalBalanceInput} from './BalanceOval.styled'

function BalanceOval(){
    return(
        <OvalBalanceSpan>
        <OvalBalanceInput
            type="text"
            name="balance"
            id="balance"
            placeholder="00.00" />
        UAH
        </OvalBalanceSpan>
        )
}

export {BalanceOval}