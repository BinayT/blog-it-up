import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

import BgImage from '../components/BgImage';
import Helmet from '../components/Helmet';
import { loginUser } from '../redux/actions/authActions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const login = useSelector((state) => state.login);
  const { loading, loginErrors } = login;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    loginErrors.length > 0 && loginErrors.map((el) => toast.error(el.msg));
  }, [loginErrors]);

  return (
    <>
      <Toaster toastOptions={{ style: { fontSize: '14px' } }} />
      <Helmet title='Blog It Up | Login Form' />
      <div className='row mt-80'>
        <div className='col-8'>
          <BgImage />
        </div>
        <div className='col-4'>
          <div className='account'>
            <div className='account__section'>
              <form onSubmit={submitHandler}>
                <div className='group'>
                  <h3 className='form-heading'>Login</h3>
                </div>
                <div className='group'>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='group__control'
                    placeholder='Enter your email'
                  />
                </div>
                <div className='group'>
                  <input
                    type='password'
                    className='group__control'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Enter your password'
                  />
                </div>
                <div className='group'>
                  <input
                    type='submit'
                    className='btn btn-default btn-block'
                    value={loading ? 'Logging In' : 'Login'}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
