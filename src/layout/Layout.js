import React from "react";
import { Header } from "../components/Header";
import { Container } from "../styles/Container.styled";
import { ToastifyContainer } from "../components/Toastify";
import { BgBottomAuth, BgBottom, BgTopAuth, BgTop } from "./Background.styled";

function Layout({ children, isAuth }) {
  return (
    <>
      <main>
        <Container>
          <Header />

           {isAuth ? < BgTopAuth/> : < BgTop/>}
           {isAuth ? < BgBottomAuth/> : <  BgBottom/>}         

          <>{children}</>

          <ToastifyContainer />
        </Container>
      </main>
    </>
  );
}
export default Layout;
