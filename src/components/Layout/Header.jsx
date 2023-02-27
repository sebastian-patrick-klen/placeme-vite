import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
  return (
    <header className='w-full px-12 bg-gray-50/90 z-10'>
      <div className='mx-auto flex items-center justify-between'>
        <Link to='/'>
          <div className='text-2xl font-semibold'>
            Place<span className='text-green-500'>Me</span>
          </div>
        </Link>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
