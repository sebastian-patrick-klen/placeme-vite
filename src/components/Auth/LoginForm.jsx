import { useFormik } from 'formik';
import { loginSchema } from '../../schemas';
import Form from '../Forms/Form';
import FormButton from '../Forms/FormButton';
import Input from '../Forms/Input';

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,

    onSubmit: (values) => {},
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        id='email'
        name='email'
        placeholder='Email'
        type='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        isError={formik.errors.email && formik.touched.email}
        errMessage={formik.errors.email}
      />
      <Input
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

      <FormButton isValid={formik.isValid} type='submit'>
        Přihlásit se
      </FormButton>
    </Form>
  );
}
