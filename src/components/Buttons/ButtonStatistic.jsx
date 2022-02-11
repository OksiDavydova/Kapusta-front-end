import { StatisticButton } from "./ButtonsStyles.styled";
import { TextReportButton } from "../Text";
import { SvgIcon } from "../SvgIcon";

function ButtonStatistic() {
  return (
    <>
      <StatisticButton>
        <TextReportButton/>
        <SvgIcon w={14} h={14} idIcon={"#icon-statistic"} />
      </StatisticButton>
    </>
  );
}
export { ButtonStatistic };
