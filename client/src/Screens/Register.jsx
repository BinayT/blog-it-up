import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import BgImage from '../components/BgImage';
import Helmet from '../components/Helmet';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
    } catch (error) {}
    const response = await axios.post(
      '/register',
      { name, email, password },
      config
    );

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
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
                    value='Register'
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
