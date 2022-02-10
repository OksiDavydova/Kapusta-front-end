import {WrapperSingle} from '../Wrapper'
import {ButtonSquare} from '../Buttons'

function BalancePageBottom(){
    return(
            <WrapperSingle width={'320px'}>
                <ButtonSquare text={'расход'}/>
                <ButtonSquare text={'доход'}/>
            </WrapperSingle>
        )
}

export {BalancePageBottom}