import { useSelector } from "react-redux";
// import { getExpenseUser } from "../../redux/getBalance/balance-selector";
import { getDataForInput } from "../../redux/setDataDiagram/dataDiagram-selector";
import {
  ReportBalanceWrapper,
  ReportBalanceDiv,
  ReportBalanceSum,
} from "./ReportBalance.styled";
import { ReportBalanceText } from "../Text/Text.styled";
import { LoaderReport } from "../Loader";
import { transactionLoading } from "../../redux/getTransaction/transaction-selector";

// ВАЖНО !!!! - ReportBalance принимает const (или prop?) = СУММА расходов и доходов, которые получает с БЭКа.
// Также суммы с БЭКа привести к формату "00 000,00 грн" через number.toLocaleString("ru-RU", {style: "currency", currency: "UAH"})

function ReportBalance() {
  const balance = useSelector(getDataForInput);
  const isLoading = useSelector(transactionLoading);
  const expenses = balance ? `-${balance.sumOfExpense} грн` : `0 грн`;
  const incomes = balance ? `+${balance.sumOfIncome} грн` : `0 грн`;

  const textResponses = "Расходы:";
  const textIncomes = "Доходы:";

  return (
    <>
      {isLoading && <LoaderReport />}
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
    </>
  );
}

export { ReportBalance };
