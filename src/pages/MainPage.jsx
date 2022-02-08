import React from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { IncomeModule } from "../components/IncomeModule";
import { ExpenseModule } from "../components/ExpenseModule";
import {Container} from '../styles/Container.styled'
import {BalancePage} from '../components/BalancePage'


export default function Main() {
  const navigate = useNavigate();
  const toReportClick = () => {
    navigate("/report");
  };

  return (
    <Container>
      <BalancePage/>
      <main>
        <h1>MAIN PAGE</h1>
        <div>
          <p>balance</p>
          <br />
          <input type="text" />
          <button>change</button>
        </div>
        <div>
          <button type="button" onClick={toReportClick}>
            to report
          </button>
          <br />
          <button>
            <Link to="expense">Доходы</Link>
          </button>
          <button>
            <Link to="income">Расходы</Link>
          </button>
        </div>
        <Routes>
          <Route path="expense" element={<ExpenseModule />} />
          <Route path="income" element={<IncomeModule />} />
        </Routes>
      </main>
    </Container>
  );
}
