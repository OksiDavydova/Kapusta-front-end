import { SvgIcon } from "../SvgIcon";
import { LinkGoogle } from "./ButtonsStyles.styled";

function GoogleLink({ text }) {
  return (
    <>
      <LinkGoogle>
        <SvgIcon w={18} h={18} idIcon={"#icon-google"} />
        {text}
      </LinkGoogle>
    </>
  );
}
export { GoogleLink };
