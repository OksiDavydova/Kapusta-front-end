import { NavLink } from "react-router-dom";
import { SvgIcon } from "../../SvgIcon";

function Logo() {
  return (
    <NavLink to="/">
      <SvgIcon w={90} h={31} idIcon={"#icon-logo-with-bg"} />
    </NavLink>
  );
}
export default Logo;
