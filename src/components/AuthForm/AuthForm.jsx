import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUsers, signUpUsers } from "../../redux/operation";
import { useForm } from "react-hook-form";
import {
  Form,
  Label,
  Input,
  AuthFormButtonWrapper,
  SpanEmail,
  SpanPassword,
  SpanText,
} from "./AuthForm.styled";
import { Button } from "../../components/Buttons";
import { LoaderAuth } from "../../components/Loader";
import { authLoading } from "../../redux/selectors";

function AuthForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(authLoading);

  const textForInput = {
    enter: "вход",
    signup: "регистрация",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    // доступ к тексту button (Используется библиотека emotion-style)
    const { innerHTML } = event.nativeEvent.submitter;

    switch (innerHTML) {
      case `${textForInput.enter}`:
        dispatch(
          loginUsers({
            email: data.email,
            password: data.password,
          }),
        );
        break;
      case `${textForInput.signup}`:
        dispatch(
          signUpUsers({
            email: data.email,
            password: data.password,
          }),
        );
        break;
      default:
        break;
    }
    reset({ email: "", password: "" });
  };
  return (
    <>
      {isLoading && <LoaderAuth />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Электронная почта: </Label>
        <Input
          placeholder="your@mail.com"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {/* Сообщение об обязательном поле */}

        {errors.email && (
          <SpanEmail>
            *Email is required. <SpanText>Example: email@email.com</SpanText>
          </SpanEmail>
        )}
        <Label>Пароль: </Label>
        <Input
          type="password"
          placeholder="Пароль"
          {...register("password", {
            required: true,
            pattern:
              /(?=.*[0-9])(?=.*[!@#-$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
          })}
        />
        {errors.password && (
          <SpanPassword>
            *Password is required.
            <SpanText>
              Must be an uppercase letter, lowercase letter, number, and symbol.
            </SpanText>
          </SpanPassword>
        )}

        <AuthFormButtonWrapper>
          <Button text={`${textForInput.enter}`} />
          <Button
            text={`${textForInput.signup}`}
            onClick={handleSubmit(onSubmit)}
          />
        </AuthFormButtonWrapper>
      </Form>
    </>
  );
}
export default AuthForm;
