import { useLoaderData } from 'react-router-dom';
import PlaceDetail from '../components/Places/PlaceDetail';

const Place = () => {
  const { place } = useLoaderData();

  return <PlaceDetail place={place} />;
};

export default Place;
