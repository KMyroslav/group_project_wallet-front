import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getIsAuth } from '../../redux/auth/auth-selectors';

export default function RestrictedRoute({
  children,
  redirectTo = '/home/main',
}) {
  const isLoggedIn = useSelector(getIsAuth);
  return !isLoggedIn ? children : <Redirect to={redirectTo} />;
}
