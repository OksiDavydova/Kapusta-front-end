import {LinkGoogle} from './ButtonsStyles.styled'
import {SvgIcon} from '../SvgIcon'

function GoogleLink({text}) {
    return (
      <>
        <LinkGoogle>
          <SvgIcon w={18} h={18}  hrefIcon={'#icon-google'}/>
          {text}
        </LinkGoogle>
      </>
    );
  }
  export {GoogleLink};

