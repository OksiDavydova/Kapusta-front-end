import {Form, Label, Input} from './AuthForm.styled'

function AuthForm({text}) {
    return (
      <>
        <Form>
          <Label>Электронная почта: </Label>
          <Input placeholder="your@mail.com"></Input>
          <Label>Пароль: </Label>
          <Input placeholder="Пароль"></Input>
        </Form>
      </>
    );
  }
  export {AuthForm};