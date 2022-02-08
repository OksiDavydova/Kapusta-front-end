import { SvgIcon } from "../SvgIcon";
import { LinkGoogle } from "./ButtonsStyles.styled";
import sprite from "../../assets/svg/symbol-defs.svg";

function GoogleLink({ text }) {
  return (
    <>
      <LinkGoogle>
        <SvgIcon w={18} h={18} hrefIcon={`${sprite}#icon-google`} />
        {text}
      </LinkGoogle>
    </>
  );
}
export { GoogleLink };
