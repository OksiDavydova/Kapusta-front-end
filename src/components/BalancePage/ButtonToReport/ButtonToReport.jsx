import { SvgIcon } from "../../SvgIcon";
import { BtnToReport, BtnReportText } from "./ButtonToReport.styled";

function ButtonToReport() {
  return (
    <>
      <BtnToReport>
        <BtnReportText>Перейти к отчетам</BtnReportText>
        <SvgIcon w={14} h={14} idIcon={"#icon-statistic"} />
      </BtnToReport>
    </>
  );
}
export default ButtonToReport;
