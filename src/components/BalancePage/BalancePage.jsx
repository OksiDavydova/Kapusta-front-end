import { ButtonSquare } from "../Buttons";
import { TextBalance } from "../Text";
import { ChangeBalance } from "../ChangeBalance";
import { SvgIcon } from "../SvgIcon";
import { CalendarMUI } from "../CalendarMUI";
import {
  BalanceWrapper,
  ContentWrapperChapter,
} from "../Wrapper/Wrapper.styled";
import { ButtonToReport } from "./ButtonToReport";

const text = "Баланс: ";

function BalancePage() {
  return (
    <>
      <BalanceWrapper>
        <ButtonToReport />
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
        <ButtonSquare text={"расход"} />
        <ButtonSquare text={"доход"} />
      </ContentWrapperChapter>
    </>
  );
}

export { BalancePage };
