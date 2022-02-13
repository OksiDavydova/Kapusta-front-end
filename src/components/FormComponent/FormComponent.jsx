import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ArrowButton } from "../Buttons";
import Media from "react-media";
import { useForm } from "react-hook-form";
import { CalendarMUI } from "../CalendarMUI";
import {
  FormWrapper,
  FormTag,
  InputDescription,
  SelectOverlay,
  CalculatorOverlay,
  ValueSpan,
  ValueInput,
  CalculatorButton,
  ButtonFormWrapper,
  FormButton,
} from "./FormStyle.styled";
import { SvgIcon } from "../SvgIcon";
import { CategorySelectUnstyled } from "../SelectUnstyled";
import { getTypeTransaction } from "../../redux/typeTransaction//transaction-selector";
import { getDate } from "../../redux/setDate/date-selector";

function FormComponent() {
  const [valueSelect, setValueSelect] = useState("");
  const date = useSelector(getDate);
  const transaction = useSelector(getTypeTransaction);
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const onSubmit = data => {
    const { description, value } = data;
    console.log(description);
    console.log(value);
    console.log(date);
    console.log(valueSelect);
    console.log(transaction);
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
          <CategorySelectUnstyled children={{ valueSelect, setValueSelect }} />
        </SelectOverlay>
        <CalculatorOverlay>
          <ValueSpan>
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
            UAH
          </ValueSpan>
          <CalculatorButton type="button">
            <SvgIcon w={20} h={20} idIcon={"#icon-calculator"} />
          </CalculatorButton>
        </CalculatorOverlay>

        <ButtonFormWrapper>
          <FormButton type="submit">ввод</FormButton>
          <FormButton type="button">очистить</FormButton>
        </ButtonFormWrapper>
      </FormTag>
    </FormWrapper>
  );
}

export default FormComponent;
