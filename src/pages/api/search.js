// import { getNearbyPlaces } from "../../../lib/google";
// import { addPlace } from "../../../lib/config";

// export default async function handler(req, res) {
//   const { lat, lng, radius, type } = req.query;
//   const response = await getNearbyPlaces(lat, lng, radius, type);
//   const data = await response.json();

//   // Firebase にデータを登録する
//   data.results.forEach(async (result) => {
//     await addPlace(result);
//   });

//   res.status(200).json(data.results);
// }
