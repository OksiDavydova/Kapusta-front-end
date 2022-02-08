import {StatisticButton} from './ButtonsStyles.styled'
import {TextBalance} from '../Text'
import {SvgIcon} from '../SvgIcon'

function ButtonStatistic() {
    return (
      <>
        <StatisticButton>
            <TextBalance margin={'0px 20px -3px 0px'} fontWeight={'400'} letterSpacing={'0.04em'} text={'Перейти к отчетам'} />
            <SvgIcon w={14} h={14}  hrefIcon={'#icon-statistic'}/>
        </StatisticButton>
      </>
    );
  }
  export {ButtonStatistic};