import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getBullForChangePage,
  getDataForInput,
} from "../../../redux/setDataDiagram/dataDiagram-selector";
import {
  changeDiagram,
  sortDataForDiagram,
} from "../../../redux/setDataDiagram/dataDiagram-slice";
import {
  CashPickerWrapper,
  CashPickerDiv,
  Arrow,
  CashPickerSpan,
} from "./CashPickerStyle.styled";

import { SvgIcon } from "../../SvgIcon";

function CashPicker() {
  const bull = useSelector(getBullForChangePage);
  const data = useSelector(getDataForInput);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data) return;
    if (bull) {
      dispatch(
        sortDataForDiagram({ category: data.income[0].category, bull, data }),
      );
    }
    if (!bull) {
      dispatch(
        sortDataForDiagram({ category: data.expense[0].category, bull, data }),
      );
    }
  }, [bull, data]);

  function handleClick(e) {
    e.preventDefault();
    console.log("Click CashPicker!");
    dispatch(changeDiagram(!bull));
  }

  let text = bull ? "доходы" : "расходы";

  return (
    <CashPickerWrapper>
      <CashPickerDiv>
        <Arrow onClick={handleClick}>
          <SvgIcon w={7} h={12} idIcon={"#left"} />
        </Arrow>
          <CashPickerSpan>{text}</CashPickerSpan>
        <Arrow onClick={handleClick}>
          <SvgIcon w={7} h={12} idIcon={"#right"} />
        </Arrow>
      </CashPickerDiv>
    </CashPickerWrapper>
  );
}

export default CashPicker;
