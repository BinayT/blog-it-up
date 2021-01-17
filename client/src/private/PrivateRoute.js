import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ path, exact, component }) => {
  const { user } = useSelector((state) => state.auth);
  return user ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to='/login' />
  );
};

export default PrivateRoute;
