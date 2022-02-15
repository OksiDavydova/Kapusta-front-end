import { useSelector } from "react-redux";
import { getExpenseUser } from "../../redux/getBalance/balance-selector";
import {
  ReportBalanceWrapper,
  ReportBalanceDiv,
  ReportBalanceSum,
} from "./ReportBalance.styled";
import { ReportBalanceText } from "../Text/Text.styled";

// ВАЖНО !!!! - ReportBalance принимает const (или prop?) = СУММА расходов и доходов, которые получает с БЭКа.
// Также суммы с БЭКа привести к формату "00 000,00 грн" через number.toLocaleString("ru-RU", {style: "currency", currency: "UAH"})

function ReportBalance() {
  const balance = useSelector(getExpenseUser);
  const expenses = `-${balance.expense} грн`;
  const incomes = `+${balance.income} грн`;

  const textResponses = "Расходы:";
  const textIncomes = "Доходы:";

  return (
    <ReportBalanceWrapper>
      <ReportBalanceDiv>
        <ReportBalanceText>{textResponses}</ReportBalanceText>
        <ReportBalanceSum expenses>{expenses}</ReportBalanceSum>
      </ReportBalanceDiv>
      <ReportBalanceDiv>
        <ReportBalanceText>{textIncomes}</ReportBalanceText>
        <ReportBalanceSum>{incomes}</ReportBalanceSum>
      </ReportBalanceDiv>
    </ReportBalanceWrapper>
  );
}

export { ReportBalance };
