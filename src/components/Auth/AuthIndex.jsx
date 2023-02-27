import { useState } from 'react';
import LoginForm from './LoginForm';
import SingupForm from './SignupForm';

export default function AtuhIndex() {
  // isMode = true => Login
  // isMode = false => Signup
  const [isMode, setMode] = useState(true);

  const changeModeHandler = () => {
    setMode(!isMode);
  };

  return (
    <div className='max-w-lg mx-auto calc-height flex flex-col content-center justify-center'>
      <h3 className='mb-6 text-xl font-semibold '>
        {isMode ? 'Přihlásit se' : 'Zaregistrovat se'}
      </h3>

      {isMode ? <LoginForm /> : <SingupForm />}

      <p className=' my-6 text-base text-gray-700'>
        {isMode ? 'Nemáte účet ' : 'Už máte účet '}
        <span onClick={changeModeHandler} className='underline cursor-pointer'>
          {!isMode ? 'přihlšte se' : 'zaregistrujte se'}
        </span>
      </p>
    </div>
  );
}
