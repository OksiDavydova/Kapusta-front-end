import React from "react";
import { SvgIcon } from "../../SvgIcon";
import { CardSignature, CardItem, CardBtnSvg } from "./CardStyle.styled";
import sprite from "../../../assets/svg/symbol-defs.svg";

const defaultPath = `${sprite}#icon-logo-with-bg`;

function Card({
  id,
  total = "0",
  categoryName = "default",
  svgPath = defaultPath,
}) {
  return (
    <CardItem key={id}>
      <p>{total}</p>
      <CardBtnSvg>
        <SvgIcon w="56" h="56" hrefIcon={svgPath} />
      </CardBtnSvg>

      <CardSignature>{categoryName}</CardSignature>
    </CardItem>
  );
}
export default Card;
