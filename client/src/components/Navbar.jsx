import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='navbar__row'>
          <div className='navbar__left'>
            <Link to='/'>
              <img src='/images/navbar-logo.png' alt='App Logo' />
            </Link>
          </div>
          <div className='navbar__right'>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/Register'>register</Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
