import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Link } from 'react-router-dom';
import { userIsAuth } from './redux/selectors';
import { MainPage, PageNotFound, ReportPage, LoginPage } from './pages';
import { PublicRoute, PrivateRoute } from './routes';
import { Layout } from './layout';

function App() {
  const isAuth = useSelector(userIsAuth);
  return (
    <>
      <Layout isAuth={isAuth}>
        <nav>
          <button>
            <Link to="login">login</Link>
          </button>
          <button>
            <Link to="main">Main</Link>
          </button>
          <button>
            <Link to="report">Report</Link>
          </button>
        </nav>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/main">
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/main/*"
            element={
              <PrivateRoute redirectTo="/login">
                <MainPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/report/*"
            element={
              <PrivateRoute redirectTo="/login">
                <ReportPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
