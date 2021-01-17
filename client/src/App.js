import { Switch, Route } from 'react-router-dom';

import Home from './Screens/Home';
import Register from './Screens/Register';
import Login from './Screens/Login';
import DashBoard from './Screens/Dashboard';
import Navbar from './components/Navbar';
import PrivateRoute from './private/PrivateRoute';
import RouteLink from './private/RouteLinks';
import './main.scss';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <RouteLink path='/register' component={Register} />
        <RouteLink path='/login' component={Login} />
        <PrivateRoute path='/dashboard' component={DashBoard} />
      </Switch>
    </>
  );
}

export default App;
