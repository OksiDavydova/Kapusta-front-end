import React from "react";

function SvgIcon({ w = "", h = "", hrefIcon }) {
  return (
    <>
      <svg width={w} height={h}>
        <use href={hrefIcon}></use>
      </svg>
    </>
  );
}

export default SvgIcon;
