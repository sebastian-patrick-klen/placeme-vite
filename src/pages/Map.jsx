import { useContext, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Map from '../components/Map/Map';
import PositionContext from '../store/position-context';

const MapPage = () => {
  const params = useParams();
  const posCtx = useContext(PositionContext);
  const { places } = useLoaderData();

  useEffect(() => {
    const [findedPlace] = places.filter((place) => place._id === params.id);
    if (findedPlace) {
      posCtx.setPosition(findedPlace.coords);
    } else {
      posCtx.setPosition(null);
    }
  }, [params.id]);

  return (
    <Map placesData={places} className='w-full calc-height' isEdit={false} />
  );
};

export default MapPage;
