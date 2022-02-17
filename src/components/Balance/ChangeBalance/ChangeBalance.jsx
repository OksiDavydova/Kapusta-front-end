import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBalanceUser } from "../../../redux/getBalance/balance-selector";
import { getDate } from "../../../redux/setDate/date-selector";
import { getUpdateBalanceUser } from "../../../redux/getBalance/balance-operation";
import { getUserTransaction } from "../../../redux/getTransaction/transaction-operation";
import { ModalBalance } from "../../Modal";
import {
  ChangeBalanceWrapper,
  ChangeBalanceInput,
  ChangeBalanceButton,
  Span,
  OvalBalanceSpan,
  OvalBalanceDiv,
  BalanceTextOval,
  BalanceText,
  LabelBalance,
} from "./ChangeBalance.styled";
import { toast } from "react-toastify";

function ChangeBalance() {
  const dispatch = useDispatch();
  const [showBalanceModal, setShowBalanceModal] = useState(true);
  const balance = useSelector(getBalanceUser);
  const date = useSelector(getDate);
  //value from input
  const [valueBalance, setValueBalance] = useState("");

  // Coordinates for Modal

  const [size, setSize] = useState([window.innerWidth, window.innerHeight])
  const handleResize = () => {
    setSize([window.innerWidth, window.innerHeight])
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [size])

  const [coordinates, setCoordinates] = useState('');
  const ref = useRef();

  useEffect(() => {
    setTimeout(() => {
      const rect = ref.current.getBoundingClientRect();
      setCoordinates(rect)
    })
  }, [size]);

 
  // End of part with coordinates

  useEffect(() => {
    dispatch(getUpdateBalanceUser());
  }, [dispatch]);
  // input
  const setBalance = e => {
    setValueBalance(e.target.value);
  };
  // form handle Submit
  const handleSubmit = async e => {
    e.preventDefault();
    // input value to number
    const fixBalanceValue = parseFloat(valueBalance).toFixed(2);

    if (isNaN(valueBalance) || !valueBalance || valueBalance < 0) {
      toast.error(`проверте данные вы ввели: ${valueBalance}`);
      // setValueBalance("");
      return;
    }

    const dateForDB = date.replaceAll("/", "");
    const newTransaction = {
      date: dateForDB,
      description: "Пополнение баланса",
      category: "Доп. доход",
      value: fixBalanceValue,
      income: true,
    };

    const { status } = await axios.post("/api/v1/transactions", newTransaction);
    if (status === 201) {
      dispatch(getUpdateBalanceUser());
      dispatch(getUserTransaction());
      removeBalanceModal();
      setValueBalance("");
      toast.success("Первое пополнение прошло успешно:)");
    }
  };

  const removeBalanceModal = () => {
    setShowBalanceModal(!showBalanceModal);
  };
  return (
    <ChangeBalanceWrapper>
      {balance ? (
        <OvalBalanceSpan>
          <BalanceTextOval>Баланс:</BalanceTextOval>
          <OvalBalanceDiv>{[balance.toLocaleString(), " ", "UAH"]}</OvalBalanceDiv>
        </OvalBalanceSpan>
      ) : (
        <>
          <BalanceText>Баланс:</BalanceText>
          <form onSubmit={handleSubmit}>
            <LabelBalance htmlFor="balance">
              <ChangeBalanceInput
                id="input"
                type="text"
                name="balance"
                // pattern="^[ 0-9]+$"
                placeholder="00.00"
                value={valueBalance}
                onChange={setBalance}
                autoComplete="off"
                autoFocus
                ref={ref}
              />
              <Span>UAH</Span>
            </LabelBalance>
            <ChangeBalanceButton type="submit">Подтвердить</ChangeBalanceButton>
          </form>
        </>
      )}

      {/* --------Modal------------- */}
      {showBalanceModal && !balance && (
        <ModalBalance coordinates={coordinates} onClose={removeBalanceModal} />
      )}
      {/* --------------------- */}
    </ChangeBalanceWrapper>
  );
}
export default ChangeBalance;
