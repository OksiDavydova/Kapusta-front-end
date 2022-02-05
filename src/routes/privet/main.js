import { Route, Routes, Link } from 'react-router-dom';
import { IncomePage, CostsPage } from './mainPage';

function Main() {
  return (
    /* этот main чисто для того, чтобы сразу можно было переходить на нужные страницы. ПОсле успешного завершения проекта убирается или дорабатывается в процессе*/
    <>
      <main>
        <h1>MAIN PAGE</h1>
        <nav>
          <button>
            <Link to="/login">login</Link>
          </button>
        </nav>
        <div>
          <button>
            <Link to="/statistics">Перейти к отчётам</Link>
          </button>
          <br />
          <button>
            <Link to="costs">Доходы</Link>
          </button>
          <button>
            <Link to="income">Расходы</Link>
          </button>
        </div>
        <Routes>
          <Route path="costs" element={<CostsPage />} />
          <Route path="income" element={<IncomePage />} />
        </Routes>
      </main>
    </>
  );
}

export { Main };
