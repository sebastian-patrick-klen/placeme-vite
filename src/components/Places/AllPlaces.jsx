import PlaceItem from './PlaceItem';

export default function AllPlaces({ places }) {
  return (
    <div className='grid grid-cols-1 gap-y-32 my-16'>
      {places.map((place) => (
        <PlaceItem
          id={place._id}
          key={place._id}
          title={place.title}
          description={place.description}
          creator={place.creator}
          creatorName={place.creatorName}
          image={place.image}
        />
      ))}
    </div>
  );
}
