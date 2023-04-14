import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState, useEffect } from "react";

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 35.680399,
  lng: 139.769017
};

const MapContainer = ({ places }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(position.coords);
      });
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyBrTOdd5nn6gYQ5UL9ODhRDjnhZlOyuVIA">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location ? { lat: location.latitude, lng: location.longitude } : center}
        zoom={13}
      />

      {places && places.map((place) => (
        <Marker key={place.id} position={{ lat: place.latitude, lng: place.longitude }} />
      ))}


    </LoadScript>
  );
};

export default MapContainer;
