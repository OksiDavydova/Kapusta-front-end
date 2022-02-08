import React from "react";
import { Form, Label, Input } from "./AuthForm.styled";

function AuthForm() {
  return (
    <>
      <Form>
        <Label>Электронная почта: </Label>
        <Input placeholder="your@mail.com" />
        <Label>Пароль: </Label>
        <Input placeholder="Пароль" />
      </Form>
    </>
  );
}
export default AuthForm;
