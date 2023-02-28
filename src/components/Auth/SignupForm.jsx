import { useFormik } from 'formik';

import { signupSchema } from '../../schemas';
import Form from '../Forms/FormWrapper';
import FormButton from '../Forms/FormButton';
import Input from '../Forms/Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from '../Layout/UI/Alert';

export default function SingupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [alertData, setAlterData] = useState({ message: '', title: '' });
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      image: '',
      password: '',
    },

    validationSchema: signupSchema,

    onSubmit: async (values) => {
      setIsLoading(true);
      const fetchString = `${import.meta.env.VITE_API_URL}/api/users/signup`;
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
          title: 'Registrace se nezdařila',
          message: data.message
            ? data.message
            : 'Je mi líto, ale registrace údaje, které jste zadali, jsou nesprávné. Zkontrolujte prosím své údaje a zkuste to znovu.',
        });
        return;
      }

      if (res.ok) {
        setIsLoading(false);
        setIsOpen(true);
        setAlterData({
          title: 'Gratulujeme vám k úspěšné registraci!',
          message:
            'Vaše účet byl úspěšně vytvořen a nyní můžete začít používat PlaceMe naplno.',
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
    <Form onSubmit={formik.handleSubmit}>
      <Input
        label='Jméno'
        type='text'
        name='name'
        id='name'
        placeholder='Jméno'
        onChange={formik.handleChange}
        value={formik.values.name}
        onBlur={formik.handleBlur}
        isError={formik.errors.name && formik.touched.name}
        errMessage={formik.errors.name}
      />
      <Input
        label='E-mail'
        id='email'
        name='email'
        placeholder='E-mail'
        type='email'
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
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
        value={formik.values.password}
        onBlur={formik.handleBlur}
        isError={formik.errors.password && formik.touched.password}
        errMessage={formik.errors.password}
      />

      <Input
        label='Obrázek'
        type='text'
        name='image'
        id='image'
        placeholder='Url adresa obrázku'
        onChange={formik.handleChange}
        value={formik.values.image}
        onBlur={formik.handleBlur}
        isError={formik.errors.image && formik.touched.image}
        errMessage={formik.errors.image}
      />
      <FormButton isValid={formik.isValid} isLoading={isLoading} type='submit'>
        Zaregistrovat se
      </FormButton>
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
    </Form>
  );
}
