import { Button, ArrowButton } from "../Buttons";
import {
  ProductWrapper,
  Form,
  Input,
  DivSelect,
  ProductDiv,
  ProductSpan,
  ProductInput,
  ProductButton,
  ButtonFormWrapper,
} from "./ExpensesPage.styled";
import { SvgIcon } from "../SvgIcon";
import { CategorySelectUnstyled } from "../SelectUnstyled";

function ExpensesPage() {
  return (
    <ProductWrapper>
      <ArrowButton />
      <Form>
        <Input
          type="text"
          name="product"
          id="product"
          placeholder="Описание товара"
        />
      </Form>
      <DivSelect>
        <CategorySelectUnstyled />
      </DivSelect>
      <ProductDiv>
        <ProductSpan>
          <ProductInput
            type="text"
            name="balance"
            id="balance"
            placeholder="00.00"
          />
          UAH
        </ProductSpan>
        <ProductButton>
          <SvgIcon w={20} h={20} idIcon={"#icon-calculator"} />
        </ProductButton>
      </ProductDiv>
      <ButtonFormWrapper>
        <Button text={"ввод"} />
        <Button text={"очистить"} />
      </ButtonFormWrapper>
    </ProductWrapper>
  );
}

export default ExpensesPage;
