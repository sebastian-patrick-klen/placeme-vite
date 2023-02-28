import { useFormik } from 'formik';
import { useContext, useEffect, useState } from 'react';
import { updatePlaceSchema } from '../../schemas';
import PositionContext from '../../store/position-context';
import Form from '../Forms/FormWrapper';
import FormButton from '../Forms/FormButton';
import Input from '../Forms/Input';
import SelectLocation from './SelectLocation';
import { getAuthToken } from '../../utils/auth';
import Alert from '../Layout/UI/Alert';
import { useNavigate } from 'react-router-dom';

const PlaceUpdater = ({ isEdit, placeData }) => {
  const posCtx = useContext(PositionContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [alertData, setAlterData] = useState({ message: '', title: '' });

  const navigate = useNavigate();
  const token = getAuthToken();

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      image: '',
    },

    validationSchema: updatePlaceSchema,

    onSubmit: async (values) => {
      const formData = {
        title: values.title,
        description: values.description,
        image: values.image,
        lat: posCtx.newPlacePos.lat,
        lng: posCtx.newPlacePos.lng,
      };

      const fetchString = `${import.meta.env.VITE_API_URL}/api/places/${
        placeData._id
      }`;

      const res = await fetch(fetchString, {
        method: 'PATCH',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token[1]}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        setIsLoading(false);
        setIsOpen(true);
        setAlterData({
          title: 'Něco se pokazilo!',
          message: data.message
            ? data.message
            : 'Je mi líto, ale přihlašovací údaje, které jste zadali, jsou nesprávné. Zkontrolujte prosím své přihlašovací údaje a zkuste to znovu.',
        });
      }

      if (res.ok) {
        setIsLoading(false);
        setIsOpen(true);
        setAlterData({
          title: 'Uloženo!',
          message: 'Příspěvek byl uspěšně uložen',
        });

        setTimeout(() => {
          setIsOpen(false);
          navigate(`/place/${data.place.id}`);
        }, 3000);
      }
    },
  });

  useEffect(() => {
    formik.setFieldValue('title', placeData.title);
    formik.setFieldValue('description', placeData.description);
    formik.setFieldValue('image', placeData.image);
    posCtx.setNewPlacePos(placeData.coords);
  }, [placeData]);

  useEffect(() => {
    setTimeout(() => setModalOpen(false), 500);
  }, [posCtx.newPlacePos]);

  return (
    <div className='max-w-lg mx-auto calc-height flex flex-col content-center justify-center'>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          label='Názv'
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

        <FormButton
          isValid={formik.isValid}
          type='submit'
          isLoading={isLoading}
        >
          {!isLoading ? 'Uložit změny' : 'Ukládání...'}
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
    </div>
  );
};

export default PlaceUpdater;
