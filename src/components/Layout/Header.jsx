import { Link } from 'react-router-dom';
import Nav from './Nav';
import logo from '../../assets/logo.svg';

const Header = () => {
  return (
    <header className='w-full px-12 bg-gray-50/90 z-10'>
      <div className='mx-auto flex items-center justify-between'>
        <Link to='/'>
          <img src={logo} className=' h-12' alt='Placeme logo' />
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
