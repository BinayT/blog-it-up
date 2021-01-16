import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Helmet from '../components/Helmet';

const Dashboard = ({ history }) => {
  const [name, setName] = useState('');
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    !auth.user ? history.push('/login') : setName(auth.user.name);
  }, [auth, history]);

  return (
    <div className='dashboard'>
      <Helmet title={`Dashboard | ${name}'s Profile`} />
      Welcome to the Dashboard, {name}
    </div>
  );
};

export default Dashboard;
