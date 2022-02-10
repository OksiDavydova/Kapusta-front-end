import {WrapperMain} from '../Wrapper'
import {BalancePageTop} from './BalancePageTop'
import {BalancePageBottom} from './BalancePageBottom'

function BalancePage(){
    return(
        <WrapperMain>
            <BalancePageTop/>
            <BalancePageBottom/>
        </WrapperMain>
        )
}

export {BalancePage}