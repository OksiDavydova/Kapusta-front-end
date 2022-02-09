import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userIsAuth } from '../redux/selectors';
// import { getIsAuth } from "../redux/auth/auth-selector";

function PublicRoute({ children, redirectTo }) {
  const isAuth = useSelector(userIsAuth);
  // const isAuth = false;

  return isAuth ? <Navigate to={redirectTo} /> : children;
}
export default PublicRoute;
