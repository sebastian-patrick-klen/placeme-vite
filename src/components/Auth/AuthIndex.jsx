import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import LoginForm from './LoginForm';
import SingupForm from './SignupForm';

export default function AtuhIndex() {
  const [searchParams] = useSearchParams();
  const isMode = searchParams.get('mode') === 'login';

  return (
    <div className='max-w-lg mx-auto calc-height flex flex-col content-center justify-center'>
      <h3 className='mb-6 text-xl text-center font-semibold '>
        {isMode ? 'Přihlásit se' : 'Zaregistrovat se'}
      </h3>

      {isMode ? <LoginForm /> : <SingupForm />}

      <p className=' my-6 text-base text-gray-700'>
        {isMode ? 'Nemáte účet? ' : 'Už máte účet. '}
        <Link
          to={`?mode=${isMode ? 'signup' : 'login'}`}
          className='underline cursor-pointer'
        >
          {!isMode ? 'Přihlašte se' : 'Zaregistrujte se'}
        </Link>
      </p>
    </div>
  );
}
