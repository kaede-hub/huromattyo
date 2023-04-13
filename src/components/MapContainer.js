import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 35.680399,
  lng: 139.769017
};

const MapContainer = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBrTOdd5nn6gYQ5UL9ODhRDjnhZlOyuVIA">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      />
    </LoadScript>
  );
};

export default MapContainer;
