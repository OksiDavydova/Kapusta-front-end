import React from "react";
import { Header } from "../components/Header";
import { Container } from "../styles/Container.styled";
import { ToastifyContainer } from "../components/Toastify";
import { Bg1, Bg2 } from "./Background.styled";

function Layout({ children, isAuth }) {
  return (
    <>
      <Container>
        <Header />
        {isAuth ? <Bg1 /> : <Bg2 />}
        <>{children}</>
        <ToastifyContainer />
      </Container>
    </>
  );
}
export default Layout;
