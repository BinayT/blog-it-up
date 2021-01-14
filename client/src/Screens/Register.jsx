import BgImage from '../components/BgImage';
const Register = () => {
  return (
    <div className='row mt-80'>
      <div className='col-8'>
        <BgImage />
      </div>
      <div className='col-4'>
        <div className='acccount'>
          <div className='acccount__section'>
            <form>
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
  );
};

export default Register;
