import React from "react";
import sprite from "../../assets/svg/symbol-defs.svg";

function SvgIcon({ w = "", h = "", idIcon }) {
  return (
    <>
      <svg width={w} height={h}>
        <use href={`${sprite}${idIcon}`}></use>
      </svg>
    </>
  );
}

export default SvgIcon;
