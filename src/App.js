import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import { userIsAuth } from "./redux/selectors";
import {
  MainPage,
  PageNotFound,
  ReportPage,
  LoginPage,
  GoogleAuthPage,
  MailConfirmationPage,
} from "./pages";
import { PublicRoute, PrivateRoute } from "./routes";
import { Layout } from "./layout";
// ???????
import { IncomeModule } from "./components/IncomeModule";
// import { Background } from "./components/Background";
import { FormComponent } from "./components/FormComponent";
import { authNotifyStatus } from "./redux/selectors";

function App() {
  const notify = useSelector(authNotifyStatus);

  useEffect(() => {
    const { status, message } = notify;
    switch (status) {
      case "error":
        toast.error(message);
        break;

      case "success":
        toast.success(message);
        break;

      default:
        return;
    }
  }, [notify]);

  const isAuth = useSelector(userIsAuth);
  return (
    <>
      <Layout isAuth={isAuth}>
        {/* <nav>
          <button>
            <Link to="login">login</Link>
          </button>
          <button>
            <Link to="/">Main</Link>
          </button>
          <button>
            <Link to="report">Report</Link>
          </button>
        </nav> */}
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/">
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/*"
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
          <Route path="/googleAuth" element={<GoogleAuthPage />} />
          <Route path="/mailConfirm" element={<MailConfirmationPage />} />
          {/* ?????????? */}
          <Route path="/expense" element={<FormComponent />} />
          <Route path="/income" element={<IncomeModule />} />
          {/* ??????? */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
