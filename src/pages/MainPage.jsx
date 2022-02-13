import React from "react";
import Media from "react-media";
// import { useSelector, useDispatch } from "react-redux";
import { Balance } from "../components/Balance";
import { TransactionTable } from "../components/TransactionTable";
import { Summary } from "../components/Summary";
import { NavigationMainMobile } from "../components/NavigationMobile";
import { TypeOperationMain } from "../components/TypeOperationMain";
import { FormComponent } from "../components/FormComponent";
import { ContentWrapper, Overlay } from "../components/Wrapper/Wrapper.styled";

export default function Main() {
  return (
    <ContentWrapper>
      <Balance />
      <Media
        query="(min-width: 767px)"
        render={() => (
          <>
            <TypeOperationMain />
            <Overlay>
              <FormComponent />
              <TransactionTable />
              <Summary />
            </Overlay>
          </>
        )}
      />
      <Media
        query="(min-width: 320px) and (max-width: 766px)"
        render={() => <TransactionTable />}
      />

      {/* open form for enter transaction */}
      <Media
        query="(min-width: 320px) and (max-width: 767px)"
        render={() => <NavigationMainMobile />}
      />

      {/* --open form for enter transaction ---*/}
    </ContentWrapper>
  );
}
