import React from "react";
import {WrapperAuth, WrapperSingle} from '../components/Wrapper'
import {Container} from '../styles/Container.styled'
import {GoogleLink, Button} from '../components/Buttons'
import {Text} from '../components/Text'
import {AuthForm} from '../components/AuthForm'
 
const firstText = 'Вы можете авторизоваться с помощью Google Account:'
const secondText = 'Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:'

export default function LoginPage() {
  return (
    /* этот main чисто для того, чтобы сразу можно было переходить на нужные страницы. ПОсле успешного завершения проекта убирается или дорабатывается в процессе*/
    <Container>
        <WrapperAuth>
          <Text widthText = {'222px'} text = {firstText}/>
            <GoogleLink text={'google'}/>
            <Text widthText = {'242px'} alignText = {'left'} text = {secondText}/>
            <AuthForm/>
            <WrapperSingle>
                <Button text={'войти'}/>
                <Button text={'регистрация'}/>
            </WrapperSingle>
        </WrapperAuth>
    </Container>
  );
}
