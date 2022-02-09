import { ButtonStatistic, ButtonSquare } from "../Buttons";
import { TextBalance } from "../Text";
import { ChangeBalance } from "../ChangeBalance";
import { SvgIcon } from "../SvgIcon";
import { CalendarMUI } from "../CalendarMUI";
import {
  ContentWrapper,
  BalanceWrapper,
  ContentWrapperChapter,
} from "../Wrapper/Wrapper.styled";

const text = "Баланс: ";

function BalancePage() {
  return (
    <ContentWrapper>
      <BalanceWrapper>
        <ButtonStatistic />
        <TextBalance
          margin={"0"}
          fontWeight={"500"}
          letterSpacing={"0.02em"}
          text={text}
        />
        <ChangeBalance />
        <ContentWrapperChapter>
          <SvgIcon w={20} h={20} idIcon={"#icon-calendar"} />
          <CalendarMUI />
        </ContentWrapperChapter>
      </BalanceWrapper>
      <ContentWrapperChapter>
        {/* // width={"320px"} */}
        <ButtonSquare text={"расход"} />
        <ButtonSquare text={"доход"} />
      </ContentWrapperChapter>
    </ContentWrapper>
  );
}

export { BalancePage };
