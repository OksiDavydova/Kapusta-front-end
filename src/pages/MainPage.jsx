import React from "react";
import Media from "react-media";
import { Balance } from "../components/Balance";
import { TransactionTable } from "../components/TransactionTable";
import { Summary } from "../components/Summary";
import { NavigationMainMobile } from "../components/NavigationMobile";

// import Notify from "../services/toastify";

import { ContentWrapper } from "../components/Wrapper/Wrapper.styled";

export default function Main() {
  return (
    <ContentWrapper>
      <Balance />
      <TransactionTable />
      {/* visible from breakpoint tablet */}
      <Media query="(min-width: 767px)" render={() => <Summary />} />

      {/* open form for enter transaction */}
      <NavigationMainMobile />
      {/* --open form for enter transaction ---*/}
    </ContentWrapper>
  );
}
