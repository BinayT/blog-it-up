import BgImage from '../components/BgImage';
import Helmet from '../components/Helmet';

const Register = () => {
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
              <form>
                <div className='group'>
                  <h3 className='form-heading'>Register</h3>
                </div>
                <div className='group'>
                  <input
                    type='text'
                    className='group__control'
                    placeholder='Enter your name'
                  />
                </div>
                <div className='group'>
                  <input
                    type='email'
                    className='group__control'
                    placeholder='Enter your email'
                  />
                </div>
                <div className='group'>
                  <input
                    type='password'
                    className='group__control'
                    placeholder='Enter your password'
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
