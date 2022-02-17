import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { SvgIcon } from "../../SvgIcon";
import {
  CardItem,
  CardText,
  CardBtnSvg,
  CardSignature,
} from "./CardStyle.styled";
import { svgName } from "./svgName";
import {
  getDataForInput,
  getBullForChangePage,
} from "../../../redux/setDataDiagram/dataDiagram-selector";
import { sortDataForDiagram } from "../../../redux/setDataDiagram/dataDiagram-slice";

function Card({ value, category }) {
  const bull = useSelector(getBullForChangePage);
  const data = useSelector(getDataForInput);
  const dispatch = useDispatch();
  const svgPath = svgName.find(item => item.category === category);
  return (
    <CardItem key={uuidv4()}>
      <CardBtnSvg
        type="button"
        onClick={() => dispatch(sortDataForDiagram({ category, bull, data }))}
      >
        <CardText>{value.toLocaleString("ru-RU")}</CardText>
        <SvgIcon w={56} h={56} idIcon={svgPath.svg} />
        <CardSignature>{category}</CardSignature>
      </CardBtnSvg>
    </CardItem>
  );
}

export default Card;
