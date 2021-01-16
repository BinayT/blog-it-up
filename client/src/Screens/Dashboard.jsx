import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Dashboard = ({ history }) => {
  const [name, setName] = useState('');
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    !auth.user ? history.push('/login') : setName(auth.user.name);
  }, [auth, history]);

  return <div className='dashboard'>Welcome to the Dashboard, {name}</div>;
};

export default Dashboard;
