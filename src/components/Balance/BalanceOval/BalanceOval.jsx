import { useSelector } from "react-redux";
import { getBalanceUser } from "../../../redux/getBalance/balance-selector";
import {
  OvalBalanceSpan,
  OvalBalanceDiv,
  BalanceTextOval,
} from "./BalanceOval.styled";

// ВАЖНО !!!! - BalanceOval принимает const (или prop?) = СУММА текущего баланса, который получает с БЭКа.
// Также сумму баланса с БЭКа привести к формату "00 000,00" через number.toLocaleString('ru-RU')
function BalanceOval() {
  const balance = useSelector(getBalanceUser);
  const text = "UAH";

  return (
    <OvalBalanceSpan>
      <BalanceTextOval>Баланс:</BalanceTextOval>
      <OvalBalanceDiv>{[balance.toLocaleString(), " ", text]}</OvalBalanceDiv>
    </OvalBalanceSpan>
  );
}

export { BalanceOval };
