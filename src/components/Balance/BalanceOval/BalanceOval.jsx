import {
  OvalBalanceSpan,
  OvalBalanceDiv,
  BalanceTextOval,
} from "./BalanceOval.styled";
// import { TextBalance } from "./TextBalance";

// ВАЖНО !!!! - BalanceOval принимает const (или prop?) = СУММА текущего баланса, который получает с БЭКа.
// Также сумму баланса с БЭКа привести к формату "00 000,00" через number.toLocaleString('ru-RU')
function BalanceOval() {
  const text = "UAH";
  const balanceSum = "55 000.00";

  return (
    <OvalBalanceSpan>
      <BalanceTextOval>Баланс:</BalanceTextOval>
      <OvalBalanceDiv>{[balanceSum, " ", text]}</OvalBalanceDiv>
    </OvalBalanceSpan>
  );
}

export { BalanceOval };
