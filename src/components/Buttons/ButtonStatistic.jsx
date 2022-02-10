import { StatisticButton } from "./ButtonsStyles.styled";
import { SvgIcon } from "../SvgIcon";

function ButtonStatistic({text = 'Перейти к отчётам'}) {
  return (
    <>
      <StatisticButton>
        {text}
        <SvgIcon w={14} h={14} hrefIcon={'#icon-statistic'} />
      </StatisticButton>
    </>
  );
}
export { ButtonStatistic };

