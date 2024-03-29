import { useEffect, useState } from 'react';
import Map from './Map';
import React from 'react';


export const MapContainer = () => {
  const [location, setLocation] = useState<google.maps.LatLngLiteral | null>(null)

  useEffect(() => {
    // 現在地の取得
    // TODO: やや不安定なので改善する
    const searchNearbyPlaces = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    };
    searchNearbyPlaces();
  }, [])

  const defaultLatLng = {
    lat: 35.7022589,
    lng: 139.7744733,
  };

  return (
    <>
      <Map location={location ?? defaultLatLng} />
    </>
  );
};