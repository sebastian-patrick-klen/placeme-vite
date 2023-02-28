import { useFormik } from 'formik';
import { useState } from 'react';
import { signupSchema } from '../../schemas';
import Form from '../Forms/Form';
import FormButton from '../Forms/FormButton';
import Input from '../Forms/Input';

export default function SingupForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      image: '',
      password: '',
    },

    validationSchema: signupSchema,

    onSubmit: (values) => {},
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
        label='Email'
        id='email'
        name='email'
        placeholder='Email'
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
      <FormButton isValid={formik.isValid} type='submit'>
        Zaregistrovat se
      </FormButton>
    </Form>
  );
}
