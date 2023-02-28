import { useLoaderData } from 'react-router-dom';
import PlaceUpdater from '../components/Editor/PlaceUpdater';

const EditPlace = () => {
  const { place } = useLoaderData();

  return <PlaceUpdater placeData={place} />;
};

export default EditPlace;
