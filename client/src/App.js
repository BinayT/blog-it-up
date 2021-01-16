import { Switch, Route } from 'react-router-dom';

import Home from './Screens/Home';
import Register from './Screens/Register';
import Login from './Screens/Login';
import DashBoard from './Screens/Dashboard';
import Navbar from './components/Navbar';
import './main.scss';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={DashBoard} />
      </Switch>
    </>
  );
}

export default App;
