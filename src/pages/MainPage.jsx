import React from "react";
import { Balance } from "../components/Balance";

// import { TransactionTable } from "../components/TransactionTable";
// import { Summary } from "../components/Summary";

// import { IncomeModule } from "../components/IncomeModule";
// import { ExpensesPage } from "../components/ExpensesPage";

// import Notify from "../services/toastify";

import {
  ContentWrapper,
  ContentWrapperChapter,
} from "../components/Wrapper/Wrapper.styled";

import { NavigationLink } from "../components/Buttons";

export default function Main() {
  return (
    <ContentWrapper>
      <Balance />
      {/* <TransactionTable /> */}
      <h2>Table</h2>
      {/* <Summary /> */}
      <ContentWrapperChapter>
        <NavigationLink pathTo={"expense"} text={"расход"} />
        <NavigationLink pathTo={"income"} text={"доход"} />
      </ContentWrapperChapter>

      {/* <Routes>
        <Route path="/expense" element={<ExpensesPage />} />
        <Route path="/income" element={<IncomeModule />} />
      </Routes> */}
    </ContentWrapper>
  );
}
