import { getNearbyPlaces } from "../../lib/google";

export default async function handler(req, res) {
  const { lat, lng, radius, type } = req.query;
  const response = await getNearbyPlaces(lat, lng, radius, type);
  const data = await response.json();
  res.status(200).json(data.results);
}
