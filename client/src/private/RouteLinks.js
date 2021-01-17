import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const RouteLinks = ({ path, exact, component }) => {
  const { user } = useSelector((state) => state.auth);

  return user ? (
    <Redirect to='/dashboard' />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default RouteLinks;
