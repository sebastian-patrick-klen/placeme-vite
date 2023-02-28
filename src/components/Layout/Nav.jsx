import { AiOutlineLogout } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { getAuthToken, logOut } from '../../utils/auth';

const Nav = () => {
  const navigate = useNavigate();
  const token = getAuthToken();

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
          {/* <Link to={'/auth?mode=login'}> */}
          <Link to={token[1] ? `/user/${token[0]}/new` : '/auth?mode=login'}>
            <p className='px-5 py-3 bg-green-500 hover:bg-green-600 text-sm uppercase text-white font-bold rounded-lg transition-colors'>
              {token ? 'Přidat nové místo' : 'Přihlásit se'}
            </p>
          </Link>

          {token[1] && (
            <p
              onClick={() => {
                logOut();
                navigate('/');
              }}
              className='px-5 py-3 bg-gray-200 hover:bg-gray-300 text-sm uppercase text-white font-bold rounded-lg transition-colors'
            >
              <AiOutlineLogout size='21px' color='#94a3b8' />
            </p>
          )}
        </div>
      </li>
    </ul>
  );
};

export default Nav;
