import React, {useState} from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { IncomeModule } from "../components/IncomeModule";
import { ExpenseModule } from "../components/ExpenseModule";
import {Container} from '../styles/Container.styled'
import {BalancePage} from '../components/BalancePage'

import {TransactionTable} from '../components/TransactionTable'
import {Summary} from '../components/Summary'

import {ExpensesPage} from '../components/ExpensesPage'


import Notify from "../services/toastify";

import { ModalBalance } from "../components/Modal";// Перенести у файл Balance


export default function Main() {
  const navigate = useNavigate();
  const toReportClick = () => {
    navigate("/report");
    Notify.success("sonia");
  };

  // Перенести у файл Balance
const [showBalanceModal, setShowBalanceModal] = useState(true);

  const removeBalanceModal= () => {                           
    setShowBalanceModal(false)
  };
//-------------------------------------------
  
  return (
    <Container>
      <BalancePage/>
      <ExpensesPage/>
      <main>
        <h1>MAIN PAGE</h1>
        <div>
          <p>balance</p>
          <br />
          <input type="text" />
          <button>change</button>

          {/* Перенести у файл Balance */}
          {showBalanceModal && 
        <ModalBalance
          onClose={removeBalanceModal}
          />
          }
          {/* --------------------- */}
          
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
          <div>
            <TransactionTable />
            <Summary />
            </div>
        </div>
        <Routes>
          <Route path="expense" element={<ExpenseModule />} />
          <Route path="income" element={<IncomeModule />} />
        </Routes>
      </main>
    </Container>
  );
}
