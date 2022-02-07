import {LinkGoogle} from './ButtonsStyles.styled'
import sprite from "../../assets/svg/symbol-defs.svg";

function GoogleLink({text}) {
    return (
      <>
        <LinkGoogle><svg width="18" height="18">
        <use href={`${sprite}#icon-google`}></use>
      </svg>{text}</LinkGoogle>
      </>
    );
  }
  export {GoogleLink};
