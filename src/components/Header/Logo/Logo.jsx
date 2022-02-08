import { NavLink } from "react-router-dom";
import { SvgIcon } from "../../SvgIcon";
import sprite from "../../../assets/svg/symbol-defs.svg";

function Logo() {
  return (
    <NavLink to="/main">
      <SvgIcon w="90" h="31" hrefIcon={`${sprite}#icon-logo-with-bg`} />
    </NavLink>
  );
}
export default Logo;
