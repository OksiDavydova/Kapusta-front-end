import { Route, Routes, Link } from 'react-router-dom';
import { CostsStatistics } from './costs';
import { IncomeStatistics } from './income';

function PeriodStatistics() {
  return (
    <>
      <button>
        <Link to="costs">Доходы</Link>
      </button>
      <button>
        <Link to="income">Расходы</Link>
      </button>
      <Routes>
        <Route path="costs/*" element={<CostsStatistics />} />
        <Route path="income/*" element={<IncomeStatistics />} />
      </Routes>
    </>
  );
}

export { PeriodStatistics };
