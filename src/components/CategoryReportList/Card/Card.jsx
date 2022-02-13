import React from "react";
import { SvgIcon } from "../../SvgIcon";
import {
  CardItem,
  CardText,
  CardBtnSvg,
  CardSignature,
} from "./CardStyle.styled";
import { svgName } from "./svgName";

// const btnStyle = {
//   width: "90px",
//   padding: 0,
//   border: "none",
//   font: "inherit",
//   color: "inherit",
//   backgroundColor: "transparent",
//   textTransform: "uppercase",
//   color: "#52555f",
// };

function Card({ key, value, category, updateChartData }) {
  const svgPath = svgName.find((item) => item.category === category);

  function handleClick(e) {
    e.preventDefault();
    updateChartData(category);
  }

  return (
    <CardItem key={key}>
      <CardBtnSvg type="button" onClick={() => handleClick(key)}>
        <CardText>{value.toLocaleString("ru-RU")}</CardText>
        <SvgIcon w={56} h={56} idIcon={svgPath.svg} />
        <CardSignature>{category}</CardSignature>
      </CardBtnSvg>
    </CardItem>
  );
}

export default Card;

// ------------------Ниже для истории полностью весь первоначальный код----------------------------------------------
// ---------------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!-------------------------------------
// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@mui/material";
// import { SvgIcon } from "../../SvgIcon";
// import { CardSignature, CardItem, CardBtnSvg } from "./CardStyle.styled";

// // const defaultPath = `${sprite}#icon-logo-with-bg`;

// function Card({ id, total = "0", categoryName = "default", svgPath, onClick }) {
//   return (
//     <CardItem key={id}>
//       {/* { ????????} */}
//       <div>
//         <p>{total}</p>
//         <button
//           type="button"
//           name={categoryName}
//           onClick={onClick}
//         >{`${categoryName}`}</button>
//         {/* <CardBtnSvg onClick={onClick}>
//           <SvgIcon w={56} h={56} idIcon={svgPath} />
//         </CardBtnSvg> */}

//         <CardSignature>{categoryName}</CardSignature>
//       </div>
//     </CardItem>
//   );
// }
// export default Card;
