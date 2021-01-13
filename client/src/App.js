import { Switch, Route } from 'react-router-dom';

import Home from './Screens/Home';
import Register from './Screens/Register';
import Login from './Screens/Login';
import './main.scss';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
    </Switch>
  );
}

export default App;
