import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MapComponent from "./MapContainer.js";

const ResultsPage = () => {
  const router = useRouter();
  const { lat, lng } = router.query;
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (lat && lng) {
        const response = await fetch(`/api/search?lat=${lat}&lng=${lng}`);
        const data = await response.json();
        setPlaces(data);
      }
    };
    fetchResults();
  }, [lat, lng]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <h1>Search Results</h1>
      <MapComponent places={places} />
    </div>
  );
};

export default ResultsPage;
