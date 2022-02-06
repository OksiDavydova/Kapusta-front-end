import { LogoContainer } from "./LogoContainer.styled";
import sprite from "../../../assets/svg/symbol-defs.svg";

function Logo() {
  return (
    <LogoContainer>
      <svg width="90" height="31">
        <use href={`${sprite}#icon-logo-with-bg`}></use>
      </svg>
    </LogoContainer>
  );
}
export default Logo;
