import React, { useEffect, lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import { userIsAuth } from "./redux/selectors";
import { PublicRoute, PrivateRoute } from "./routes";
import { Layout } from "./layout";
import { IncomeModule } from "./components/IncomeModule";
import { FormComponent } from "./components/FormComponent";
import { authNotifyStatus } from "./redux/selectors";
import { LoaderReport } from "./components/Loader";

const LoginPage = lazy(() =>
  import("./pages/LoginPage" /* webpackChunkName: "login_page" */),
);
const MainPage = lazy(() =>
  import("./pages/MainPage" /* webpackChunkName: "main_page" */),
);
const ReportPage = lazy(() =>
  import("./pages/ReportPage" /* webpackChunkName: "report_page" */),
);
const GoogleAuthPage = lazy(() =>
  import("./pages/GoogleAuthPage" /* webpackChunkName: "google_auth_page" */),
);
const PageNotFound = lazy(() =>
  import("./pages/PageNotFound" /* webpackChunkName: "not_found_page" */),
);
const MailConfirmationPage = lazy(() =>
  import(
    "./pages/MailConfirmationPage" /* webpackChunkName: "mail_confirmation_page" */
  ),
);

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
        <Suspense fallback={<LoaderReport />}>
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
            <Route path="/expense" element={<FormComponent />} />
            <Route path="/income" element={<IncomeModule />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
