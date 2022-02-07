import { WhiteWrapper, SingleWrapper } from "./Wrapper.styled";
import { GoogleLink, Button } from "../Buttons";
import { Text } from "../Text";
import { AuthForm } from "../AuthForm";

const firstText = "Вы можете авторизоваться с помощью Google Account:";
const secondText =
  "Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:";

function Wrapper() {
  return (
    <WhiteWrapper>
      <Text widthText={"222px"} text={firstText}></Text>
      <GoogleLink text={"google"} />
      <Text widthText={"222px"} alignText={"left"} text={secondText}></Text>
      <AuthForm />
      <SingleWrapper>
        <Button text={"войти"}></Button>
        <Button text={"регистрация"}></Button>
      </SingleWrapper>
    </WhiteWrapper>
  );
}
export { Wrapper };
