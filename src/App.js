// import "./styles";
import { Route, Routes, Link } from 'react-router-dom';
import { publicRoutes, privetRoutes } from './routes';
import Header from "./components/modules";
const { LoginWithReg, PageNotFound } = publicRoutes;
const { Main, Statistics } = privetRoutes;

function App() {
  return (
    <>
      <Header/>
      <Routes>
        {/* этот Routes чисто для того, чтобы сразу можно было переходить на нужные страницы. ПОсле успешного завершения проекта убирается или дорабатывается в процессе*/}
        <Route
          path="/"
          element={
            <main>
              <nav>
                <button>
                  <Link to="login">login</Link>
                </button>
                <button>
                  <Link to="main">Main</Link>
                </button>
                <button>
                  <Link to="statistics">Statistics</Link>
                </button>
              </nav>
            </main>
          }
        />
        <Route path="/login" element={<LoginWithReg />} />
        <Route path="/main/*" element={<Main />} />
        <Route path="/statistics/*" element={<Statistics />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
