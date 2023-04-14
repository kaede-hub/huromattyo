// ResultsPage.js
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MapContainer from "@/components/MapContainer";

const ResultsPage = () => {
  const router = useRouter();
  const { lat, lng } = router.query;
  const [location, setLocation] = useState(null);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    if (lat && lng) {
      setLocation({ latitude: Number(lat), longitude: Number(lng) });
    }
  }, [lat, lng]);

  useEffect(() => {
    const fetchResults = async () => {
      if (lat && lng) {
        const response = await fetch(`/api/search?lat=${lat}&lng=${lng}&radius=1500&type=gym,sauna`);
        const data = await response.json();
        setPlaces(data);
      }
    };
    fetchResults();
  }, [lat, lng]);

  return (
    <>
      <Header />
      <div style={{ height: "100vh", width: "100%" }}>
        <h1>検索結果</h1>
        {location && <MapContainer location={location} places={places} />}
      </div>
    </>
  );
};

export default ResultsPage;
