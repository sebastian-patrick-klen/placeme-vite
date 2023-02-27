import { useLoaderData } from 'react-router-dom';
import AllPlaces from '../components/Places/AllPlaces';

const UserPlaces = () => {
  const { places } = useLoaderData();

  return <AllPlaces places={places} />;
};

export default UserPlaces;
