import { Switch, Route } from 'react-router-dom';

import Home from './Screens/Home';

function App() {
  return (
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  );
}

export default App;
