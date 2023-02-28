import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <ul className='flex items-center  gap-12 py-6'>
      <li>
        <Link to='/'>
          <p className='text-sm hover:text-green-500 font-bold transition-colors'>
            Uživatelé
          </p>
        </Link>
      </li>
      <li>
        <Link to='/map/all'>
          <p className='text-sm hover:text-green-500 font-bold transition-colors'>
            Mapa
          </p>
        </Link>
      </li>
      <li>
        <div className='flex items-center justify-center gap-4'>
          {/* <Link to={'/user/63fc9ce7e8aa1af01a10282b/new'}> */}
          <Link to={'/auth?mode=login'}>
            <p className='px-5 py-3 bg-green-500 hover:bg-green-600 text-sm uppercase text-white font-bold rounded-lg transition-colors'>
              {/* Přidat nové místo */}
              Přihlásit se
            </p>
          </Link>

          {/* <p
            onClick={() => signOut()}
            className='px-5 py-3 bg-gray-200 hover:bg-gray-300 text-sm uppercase text-white font-bold rounded-lg transition-colors'
          >
            <AiOutlineLogout size='21px' color='#94a3b8' />
          </p> */}
        </div>
      </li>
    </ul>
  );
};

export default Nav;
