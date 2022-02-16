import React from "react";
import { useDispatch } from "react-redux";
import { googleAuthUsers } from "../redux/operation";
import { WrapperAuth } from "../components/Wrapper";
import { WrapperLoginContainer } from "../components/Wrapper/Wrapper.styled";
import { GoogleLink } from "../components/Buttons";
import { Text } from "../components/Text";
import { AuthForm } from "../components/AuthForm";
import Title from "../components/Title/Title";

const firstText = "Вы можете авторизоваться с помощью Google Account:";
const secondText =
  "Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:";

export default function LoginPage() {
  const dispatch = useDispatch();
  const getToken = localStorage.getItem("token");

  if (getToken) {
    dispatch(googleAuthUsers(getToken));
  }

  return (
    <>
      <WrapperLoginContainer>
        <Title />
        <WrapperAuth>
          <Text widthText={"222px"} text={firstText} />
          <GoogleLink text={"google"} />
          <Text widthText={"242px"} alignText={"left"} text={secondText} />
          <AuthForm />
        </WrapperAuth>
      </WrapperLoginContainer>
    </>
  );
}
