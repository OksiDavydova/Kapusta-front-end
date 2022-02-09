import React from "react";
import { WrapperAuth } from "../components/Wrapper";
import { GoogleLink } from "../components/Buttons";
import { Text } from "../components/Text";
import { AuthForm } from "../components/AuthForm";

const firstText = "Вы можете авторизоваться с помощью Google Account:";
const secondText =
  "Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:";

export default function LoginPage() {
  return (
    <WrapperAuth>
      <Text widthText={"222px"} text={firstText} />
      <GoogleLink text={"google"} />
      <Text widthText={"242px"} alignText={"left"} text={secondText} />
      <AuthForm />
    </WrapperAuth>
  );
}
