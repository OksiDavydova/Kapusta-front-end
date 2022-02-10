import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { SvgIcon } from "../../SvgIcon";
import { CardSignature, CardItem, CardBtnSvg } from "./CardStyle.styled";

// const defaultPath = `${sprite}#icon-logo-with-bg`;

function Card({ id, total = "0", categoryName = "default", svgPath, onClick }) {
  return (
    <CardItem key={id}>
      {/* { ????????} */}
      <div>
        <p>{total}</p>
        <button
          type="button"
          name={categoryName}
          onClick={onClick}
        >{`${categoryName}`}</button>
        {/* <CardBtnSvg onClick={onClick}>
          <SvgIcon w={56} h={56} idIcon={svgPath} />
        </CardBtnSvg> */}

        <CardSignature>{categoryName}</CardSignature>
      </div>
    </CardItem>
  );
}
export default Card;
