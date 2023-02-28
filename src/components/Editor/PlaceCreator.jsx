import { useFormik } from 'formik';
import { AnimatePresence } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { updatePlaceSchema } from '../../schemas';
import PositionContext from '../../store/position-context';
import Form from '../Forms/Form';
import FormButton from '../Forms/FormButton';
import Input from '../Forms/Input';
import SelectLocation from './SelectLocation';

const PlaceCreator = () => {
  const posCtx = useContext(PositionContext);
  const [modalOpen, setModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      image: '',
    },

    validationSchema: updatePlaceSchema,

    onSubmit: (values) => {
      const formData = {
        title: values.title,
        description: values.description,
        image: values.image,
        lat: posCtx.newPlacePos.lat,
        lng: posCtx.newPlacePos.lng,
      };
      console.log(formData);
    },
  });

  useEffect(() => {
    setTimeout(() => setModalOpen(false), 500);
  }, [posCtx.newPlacePos]);

  return (
    <div className='max-w-lg mx-auto calc-height flex flex-col content-center justify-center'>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          label='Název'
          id='title'
          name='title'
          placeholder='Název'
          type='title'
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.title}
          isError={formik.errors.title && formik.touched.title}
          errMessage={formik.errors.title}
        />
        <Input
          label='Popis'
          id='description'
          name='description'
          placeholder='Popis'
          type='text'
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.description}
          isError={formik.errors.description && formik.touched.description}
          errMessage={formik.errors.description}
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

        <SelectLocation open={modalOpen} setOpen={setModalOpen} />

        <FormButton isValid={formik.isValid} type='submit'>
          Přidat místo
        </FormButton>
      </Form>
    </div>
  );
};

export default PlaceCreator;
