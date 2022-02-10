import React from "react";
import { Link } from "react-router-dom";
import { SvgIcon } from "../../SvgIcon";
import { CardSignature, CardItem, CardBtnSvg } from "./CardStyle.styled";

// const defaultPath = `${sprite}#icon-logo-with-bg`;

function Card({ id, total = "0", categoryName = "default", svgPath }) {
  return (
    <CardItem key={id}>
      {/* { ????????} */}
      <Link to={`/report/${id}`}>
        <p>{total}</p>
        <CardBtnSvg>
          <SvgIcon w={56} h={56} idIcon={svgPath} />
        </CardBtnSvg>

        <CardSignature>{categoryName}</CardSignature>
      </Link>
    </CardItem>
  );
}
export default Card;
