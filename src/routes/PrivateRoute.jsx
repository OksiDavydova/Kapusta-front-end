import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userIsAuth } from "../redux/selectors";

function PrivateRoute({ children, redirectTo }) {
  const isAuth = useSelector(userIsAuth);

  return isAuth ? children : <Navigate to={redirectTo} />;
}
export default PrivateRoute;
