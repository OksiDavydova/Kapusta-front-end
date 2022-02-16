import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { googleAuthUsers } from '../redux/operation';
import { userIsAuth } from '../redux/selectors';

export default function GoogleAuthPage() {
  const isAuth = useSelector(userIsAuth);
  const dispatch = useDispatch();

  // Вытаскиваем токен со строки запроса
  const token = new URLSearchParams(document.location.search).get('token');

  dispatch(googleAuthUsers(token));
  console.log(isAuth);
  
    return isAuth ? <Navigate to="/" /> : <Navigate to="/login" />;
  
}