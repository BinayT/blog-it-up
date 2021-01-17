import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { LOGOUT } from '../redux/constants/authConstants';

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.removeItem('jwtToken');
    dispatch({ type: LOGOUT });
  };

  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='navbar__row'>
          <div className='navbar__left'>
            <Link to='/'>
              <img src='/images/navbar-logo.png' alt='' />
            </Link>
          </div>

          {user ? (
            <div className='navbar__right'>
              <li>
                <Link to='/dashboard'>Create Post</Link>
              </li>
              <li>
                <span>Hi, {user.name}</span>
              </li>
              <li>
                <span onClick={logout}>Logout</span>
              </li>
            </div>
          ) : (
            <div className='navbar__right'>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/register'>Register</Link>
              </li>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
