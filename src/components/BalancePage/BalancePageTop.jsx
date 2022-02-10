import {WrapperSingle, WrapperBalance} from '../Wrapper'
import {ButtonStatistic} from '../Buttons'
import {TextBalance} from '../Text'
import {ChangeBalance} from '../ChangeBalance'
import {SvgIcon} from '../SvgIcon'
import {CalendarMUI} from '../CalendarMUI'

const text = 'Баланс: '

function BalancePageTop(){
    return(
            <WrapperBalance>
                <ButtonStatistic/>
                <TextBalance text={text}/>
                <ChangeBalance/>
                <WrapperSingle width={'254px'}>
                    <SvgIcon w={20} h={20}  hrefIcon={'#icon-calendar'}/>
                    <CalendarMUI/>
                </WrapperSingle>
            </WrapperBalance>
        )
}

export {BalancePageTop}