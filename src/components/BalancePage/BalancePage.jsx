import {WrapperSingle, WrapperBalance} from '../Wrapper'
import {ButtonStatistic, ButtonSquare} from '../Buttons'
import {TextBalance} from '../Text'
import {ChangeBalance} from '../ChangeBalance'
import {SvgIcon} from '../SvgIcon'
import {WrapperMain} from '../Wrapper'
import {CalendarMUI} from '../CalendarMUI'


const text = 'Баланс: '

function BalancePage(){
    return(
        <WrapperMain>
            <WrapperBalance>
                <ButtonStatistic/>
                <TextBalance margin={'0'} fontWeight={'500'} letterSpacing={'0.02em'} text={text}/>
                <ChangeBalance/>
                <WrapperSingle width={'254px'}>
                <SvgIcon w={20} h={20}  hrefIcon={'#icon-calendar'}/>
                <CalendarMUI/>
                </WrapperSingle>
            </WrapperBalance>
            <WrapperSingle width={'320px'}>
                <ButtonSquare text={'расход'}/>
                <ButtonSquare text={'доход'}/>
            </WrapperSingle>
        </WrapperMain>
        )
}

export {BalancePage}