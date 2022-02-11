import {OvalBalanceSpan, OvalBalanceDiv} from './BalanceOval.styled';
import {TextBalance} from '../../Text'

// ВАЖНО !!!! - BalanceOval принимает const (или prop?) = СУММА текущего баланса, который получает с БЭКа.
// Также сумму баланса с БЭКа привести к формату "00 000,00" через number.toLocaleString('ru-RU')
function BalanceOval(){

    const text = 'UAH'
    const balanceSum = '55 000.00'
    
    return(
        <OvalBalanceSpan>
            <TextBalance/>
            <OvalBalanceDiv>{[balanceSum, ' ', text]}</OvalBalanceDiv>
        </OvalBalanceSpan>
        )
}

export {BalanceOval}