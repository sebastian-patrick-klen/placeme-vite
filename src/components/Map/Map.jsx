import { useContext, useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from 'react-leaflet';
import PositionContext from '../../store/position-context';
import Markers from './Markers';

export default function Map({
  placesData,
  className,
  isEdit,
  getPlaceLocation,
}) {
  const posCtx = useContext(PositionContext);

  // Get coords, render place marker
  function LocationMarker() {
    const map = useMapEvents({
      dblclick(e) {
        posCtx.setNewPlacePos(e.latlng);
      },
    });

    return posCtx.newPlacePos === null ? null : (
      <Marker position={posCtx.newPlacePos}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  function LookAt() {
    const [position, setPosition] = useState(null);

    const map = useMap();

    useEffect(() => {
      map.locate().on('locationfound', function (e) {
        setPosition(e.latlng);

        if (!posCtx.position) {
          map.flyTo(e.latlng, map.getZoom());
        } else {
          map.flyTo(posCtx.position, map.getZoom());
        }
      });
    }, [map]);

    return position === null ? null : (
      <Marker position={position}>
        <Popup>
          <p>Právě se nacházíte zde</p>
        </Popup>
      </Marker>
    );
  }

  return (
    <MapContainer
      className={className}
      center={
        isEdit && posCtx.newPlacePos ? posCtx.newPlacePos : [50.0833, 14.4667]
      }
      zoom={20}
      doubleClickZoom={false}
      scrollWheelZoom={true}
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

      {!isEdit && <LookAt />}

      {isEdit && <LocationMarker />}

      <Markers placesData={placesData} />
    </MapContainer>
  );
}
