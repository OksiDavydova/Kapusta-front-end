import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ArrowButton } from "../Buttons";
import Media from "react-media";
import { useForm } from "react-hook-form";
import { CalendarMUI } from "../CalendarMUI";
import {
  FormWrapper,
  FormTag,
  FormContainer,
  InputDescription,
  SelectOverlay,
  CalculatorOverlay,
  ValueSpan,
  ValueInput,
  CalculatorButton,
  ButtonFormWrapper,
  FormButton,
  FormButtonSubmit,
} from "./FormStyle.styled";
import { SvgIcon } from "../SvgIcon";
import { CategorySelectUnstyled } from "../SelectUnstyled";
import { getTypeTransaction } from "../../redux/typeTransaction//transaction-selector";
import { getDate } from "../../redux/setDate/date-selector";
import { getUpdateBalanceUser } from "../../redux/getBalance/balance-operation";

function FormComponent() {
  const [valueSelect, setValueSelect] = useState("");
  const date = useSelector(getDate);
  const transaction = useSelector(getTypeTransaction);
  const asfsasfsd = useSelector(state => state.balance);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const onSubmit = async data => {
    const { description, value } = data;
    const dateForDB = date.replaceAll("/", "");
    const newTransaction = {
      date: dateForDB,
      description,
      category: valueSelect,
      value,
      income: transaction,
    };
    const { status } = await axios.post("/api/v1/transactions", newTransaction);

    if (status === 201) {
      dispatch(getUpdateBalanceUser());
    }
    resetInputField();
  };

  const resetInputField = () => {
    resetField("description");
    resetField("value");
  };

  return (
    <FormWrapper>
      <Media
        query="(min-width: 320px) and (max-width: 767px)"
        render={() => <ArrowButton />}
      />

      <FormTag onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <FormContainer>
          <Media query="(min-width: 768px)" render={() => <CalendarMUI />} />

          <InputDescription
            type="text"
            name="description"
            id="description"
            placeholder="Описание товара"
            {...register("description", {
              required: true,
              maxLength: 80,
            })}
          />

          <SelectOverlay>
            {/* ??????? */}
            <CategorySelectUnstyled
              children={{ valueSelect, setValueSelect }}
            />
          </SelectOverlay>
          <CalculatorOverlay>
            <ValueInput
              type="text"
              name="value"
              id="value"
              placeholder="00.00"
              {...register("value", {
                required: true,
                maxLength: 80,
              })}
            />
            <ValueSpan> UAH</ValueSpan>
            <CalculatorButton type="button">
              <SvgIcon w={20} h={20} idIcon={"#icon-calculator"} />
            </CalculatorButton>
          </CalculatorOverlay>
        </FormContainer>
        <ButtonFormWrapper>
          <FormButtonSubmit type="submit">ввод</FormButtonSubmit>
          <FormButton type="button">очистить</FormButton>
        </ButtonFormWrapper>
      </FormTag>
    </FormWrapper>
  );
}

export default FormComponent;
