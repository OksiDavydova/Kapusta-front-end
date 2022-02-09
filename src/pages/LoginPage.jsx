
import React from "react";
import { WrapperAuth } from "../components/Wrapper";
import { ContentWrapperChapter } from "../components/Wrapper/Wrapper.styled";
import { GoogleLink, Button } from "../components/Buttons";
import { Text } from "../components/Text";
import { AuthForm } from "../components/AuthForm";

const firstText = "Вы можете авторизоваться с помощью Google Account:";
const secondText =
  "Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:";

export default function LoginPage() {
  return (
    /* этот main чисто для того, чтобы сразу можно было переходить на нужные страницы. ПОсле успешного завершения проекта убирается или дорабатывается в процессе*/
    <WrapperAuth>
      <Text widthText={"222px"} text={firstText} />
      <GoogleLink text={"google"} />
      <Text widthText={"242px"} alignText={"left"} text={secondText} />
      <AuthForm />
      <ContentWrapperChapter>
        <Button text={"войти"} />
        <Button text={"регистрация"} />
      </ContentWrapperChapter>
    </WrapperAuth>

  );
}
