import { useFormik } from 'formik';
import { loginSchema } from '../../schemas';
import Form from '../Forms/FormWrapper';
import FormButton from '../Forms/FormButton';
import Input from '../Forms/Input';
import Alert from '../Layout/UI/Alert';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [alertData, setAlterData] = useState({ message: '', title: '' });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,

    onSubmit: async (values) => {
      setIsLoading(true);
      const fetchString = `${import.meta.env.VITE_API_URL}/api/users/login`;
      const res = await fetch(fetchString, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      if (!res.ok) {
        setIsLoading(false);
        setIsOpen(true);
        setAlterData({
          title: 'Přihlašování se nezdařilo',
          message: data.message
            ? data.message
            : 'Je mi líto, ale přihlašovací údaje, které jste zadali, jsou nesprávné. Zkontrolujte prosím své přihlašovací údaje a zkuste to znovu.',
        });
      }

      if (res.ok) {
        setIsLoading(false);
        setIsOpen(true);
        setAlterData({
          title: 'Vítáme tě zpět!',
          message:
            'Vaše přihlašovací údaje byly úspěšně ověřeny a byli jste přihlášeni do vašeho účtu.',
        });

        localStorage.setItem('token', `${data.id} ${data.token}`);
        setTimeout(() => {
          setIsOpen(false);
          navigate('/');
        }, 3000);
      }
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          id='email'
          label='E-mail'
          name='email'
          placeholder='E-mail'
          type='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          isError={formik.errors.email && formik.touched.email}
          errMessage={formik.errors.email}
        />
        <Input
          label='Heslo'
          type='password'
          name='password'
          id='password'
          placeholder='Heslo'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          isError={formik.errors.password && formik.touched.password}
          errMessage={formik.errors.password}
        />

        <FormButton
          isValid={formik.isValid}
          isLoading={isLoading}
          type='submit'
        >
          {!isLoading ? 'Přihlásit se' : 'Přihlašování...'}
        </FormButton>
      </Form>
      <Alert
        title={alertData.title}
        message={alertData.message}
        cancleBtn={
          <button className='text-mauve11 bg-mauve4 hover:bg-mauve5 inline-flex py-3 items-center justify-center rounded-md px-4 font-medium leading-none outline-none '>
            Zavřít
          </button>
        }
        btn='Smazat'
        open={isOpen}
        setOpen={setIsOpen}
      />
    </>
  );
}
