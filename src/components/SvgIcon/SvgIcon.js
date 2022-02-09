import React from 'react';
import sprite from '../../assets/svg/symbol-defs.svg';

function SvgIcon({ w = '', h = '', hrefIcon }) {
  return (
    <>
      <svg width={w} height={h}>
        <use href={`${sprite}${hrefIcon}`}></use>
      </svg>
    </>
  );
}

export default SvgIcon;
