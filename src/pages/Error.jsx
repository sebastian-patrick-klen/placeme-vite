import { Link, useRouteError } from 'react-router-dom';
import Header from '../components/Layout/Header';

const Error = () => {
  const error = useRouteError();

  let title = 'Vyskytla se chyba!';
  let message = 'Něco je špatně!';

  if (error.status === 500) {
    title = 'Interní chyba serveru';
    message = 'Došlo k neznámé chybě na serveru.';
  } else if (error.status === 404) {
    title = 'Stránka nenalezena';
    message =
      'Požadovaná stránka nebyla nalezena. Prosím, zkontrolujte, zda jste zadali správnou URL adresu.';
  } else if (error.status === 400) {
    title = 'Chybná žádost';
    message =
      'Vaše žádost nebyla zpracována, protože obsahuje neplatné parametry nebo formát.';
  } else if (error.status === 401) {
    title = 'Přístup zamítnut';
    message =
      'Pro získání přístupu k požadovanému zdroji je třeba se nejprve přihlásit.';
  }

  return (
    <>
      <Header />
      <div className='max-w-4xl calc-height mx-auto flex flex-col gap-4 items-center justify-center'>
        <h1 className='text-2xl text-center font-bold'>{title}</h1>
        <p className='pb-1 pt-1 text-gray-600 text-center'>
          Chyba <span className='font-bold'>{error.status}</span> | {message}
        </p>

        {/* <Link to='/'>
        <p className='px-5 py-3 bg-green-500 hover:bg-green-600 text-sm uppercase text-white font-bold rounded-lg transition-colors'>
          Vrátit se domů
        </p>
      </Link> */}
      </div>
    </>
  );
};

export default Error;
