import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

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
                <Link to='/dashboard'>Hi, {user.name}</Link>
              </li>
              <li>
                <Link to='/logout'>Logout</Link>
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
