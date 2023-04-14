// pages/api/search.js

import { getNearbyPlaces } from "../../../lib/google";
import firebase from "../../../lib/firebase";

export default async function handler(req, res) {
  const { lat, lng, radius, type } = req.query;
  const response = await getNearbyPlaces(lat, lng, radius, type);
  const data = await response.json();
  
  const db = firebase.firestore();
  const collectionRef = db.collection("places");
  
  // Firebase にデータを登録する
  data.results.forEach(async (result) => {
    const docRef = collectionRef.doc(result.place_id);
    await docRef.set(result);
  });
  
  res.status(200).json(data.results);
}

