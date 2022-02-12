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

function FormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();
  const onSubmit = (data) => {
    // const { description, value } = data;
    console.log(data);
    console.log(errors);
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
          <CategorySelectUnstyled />
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
