import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

import { userRegister } from '../redux/actions/authActions';
import BgImage from '../components/BgImage';
import Helmet from '../components/Helmet';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const { loading, registerErrors } = auth;

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const data = { name, email, password };
    dispatch(userRegister(data));
    setName('');
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    registerErrors.length > 0 &&
      registerErrors.map((el) => toast.error(el.msg));
  }, [registerErrors]);

  return (
    <>
      <Toaster />
      <Helmet title='Blog It Up | Registration Form' />
      <div className='row mt-80'>
        <div className='col-8'>
          <BgImage />
        </div>
        <div className='col-4'>
          <div className='account'>
            <div className='account__section'>
              <form onSubmit={formSubmitHandler}>
                <div className='group'>
                  <h3 className='form-heading'>Register</h3>
                </div>

                <div className='group'>
                  <input
                    type='text'
                    name='name'
                    className='group__control'
                    placeholder='Enter your name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>

                <div className='group'>
                  <input
                    type='email'
                    name='email'
                    className='group__control'
                    placeholder='Enter your email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>

                <div className='group'>
                  <input
                    type='password'
                    name='password'
                    className='group__control'
                    placeholder='Enter your password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>

                <div className='group'>
                  <input
                    type='submit'
                    className='btn btn-default btn-block'
                    value={loading ? 'Registering...' : 'Register'}
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

export default Register;
