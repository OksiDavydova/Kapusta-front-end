import {useState} from 'react'
import {CashPickerWrapper, Arrow, CashPickerSpan} from './CashPicker.styled'
import {SvgIcon} from '../SvgIcon'

function CashPicker(){
    
    const [value, setValue] = useState(false)

    function handleClick(e) {
        e.preventDefault();
        console.log('Была нажата ссылка.');
       value ? setValue(false) : setValue(true)
      };

      const text = value ? 'расходы' : 'доходы'

    return(
        <CashPickerWrapper>
            <Arrow onClick={handleClick}>
                <SvgIcon w={7} h={12} hrefIcon={'#left'}/>
            </Arrow>
            <CashPickerSpan>{text}</CashPickerSpan>
            <Arrow onClick={handleClick}>
                <SvgIcon w={7} h={12} hrefIcon={'#right'}/>
            </Arrow>
        </CashPickerWrapper>
        )
}

export {CashPicker}