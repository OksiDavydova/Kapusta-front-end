import { Route, Routes, Link } from 'react-router-dom';

function IncomeStatistics() {
  return (
    <>
      <div>
        <button>
          <Link to="1">ЗП</Link>
        </button>
        <button>
          <Link to="2">Доп. доход</Link>
        </button>
      </div>
      <Routes>
        <Route path="1" element={<h1>ЗП</h1>} />
        <Route path="2" element={<h1>Доп. доход</h1>} />
      </Routes>
    </>
  );
}

export { IncomeStatistics };
