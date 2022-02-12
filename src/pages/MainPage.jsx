import React from "react";
import Media from "react-media";
import { Balance } from "../components/Balance";
import { TransactionTable } from "../components/TransactionTable";
import { Summary } from "../components/Summary";
import { NavigationMainMobile } from "../components/NavigationMobile";
// import Notify from "../services/toastify";
import { TypeOperationMain } from "../components/TypeOperationMain";
import { ContentWrapper } from "../components/Wrapper/Wrapper.styled";

export default function Main() {
  return (
    <ContentWrapper>
      <Balance />
      <Media query="(min-width: 767px)" render={() => <TypeOperationMain />} />

      <TransactionTable />
      {/* visible from breakpoint tablet */}
      <Media query="(min-width: 767px)" render={() => <Summary />} />

      {/* open form for enter transaction */}
      <Media
        query="(min-width: 320px) and (max-width: 767px)"
        render={() => <NavigationMainMobile />}
      />

      {/* --open form for enter transaction ---*/}
    </ContentWrapper>
  );
}
