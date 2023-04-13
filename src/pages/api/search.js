import axios from "axios";

export default async function handler(req, res) {
  const { lat, lng } = req.query;

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const radius = 1500;
  const keywords = encodeURIComponent("ジム サウナ");

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&keyword=${keywords}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.status(200).json(response.data.results);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data from Google Maps API" });
  }
}
