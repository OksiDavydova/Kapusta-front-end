import React from "react";

import { Header } from "../components/Header";
import { Container } from "../styles/Container.styled";
import { ToastifyContainer } from "../components/Toastify";
import { BgOverlay, Bg2 } from "./Background.styled";

function Layout({ children, isAuth }) {
  return (
    <>
      <main>
        <Container>
          <Header />
          {isAuth ? <BgOverlay /> : <Bg2 />}
          <>{children}</>

          <ToastifyContainer />
        </Container>
      </main>
    </>
  );
}
export default Layout;
