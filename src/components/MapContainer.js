import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useState, useEffect, useCallback } from "react";
import { Button } from "@chakra-ui/react";

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
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(position.coords);
      });
    }
  }, []);

  const handleCenterChange = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(position.coords);
        setMap((prevMap) => {
          const map = prevMap;
          map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
          return map;
        });
      });
    }
  };

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAcJeXA_o3zdFSpU0MogwbGB6QgvdHhSSc"
    >
      <GoogleMap
        onLoad={onLoad}
        mapContainerStyle={containerStyle}
        center={location ? { lat: location.latitude, lng: location.longitude } : center}
        zoom={13}
      >
        {places && places.map((place) => (
          <Marker key={place.id} position={{ lat: place.latitude, lng: place.longitude }} />
        ))}

        <div style={{ position: "absolute", top: "10px", right: "10px" }}>
          <Button onClick={handleCenterChange} fontWeight="bold"
          borderRadius="50px"
          px={20}
          py={10}
          bg="#38B6FF"
          color="white"
          fontFamily="游ゴシック, YuGothic, sans-serif"
          cursor="pointer"
          _hover={{ cursor: "pointer" }}>
            現在地に戻る
          </Button>
        </div>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
