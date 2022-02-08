import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { MainPage, PageNotFound, ReportPage, LoginPage } from './pages';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />
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
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main/*" element={<MainPage />} />
        <Route path="/report/*" element={<ReportPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
