import Header from "@/components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MapContainer from "@/components/MapContainer";
import { Flex, Button, Box, Text } from "@chakra-ui/react";
import { googleMapsApiKey } from "../../lib/config";

const getNearbyPlaces = async (lat, lng, radius) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&types=${types}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
  );
  return response;
};


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
        const response = await getNearbyPlaces(lat, lng, 1500, "gym,sauna");
        const data = await response.json();
        console.log(data);
        setPlaces(data.results);
      }
    };
    fetchResults();
  }, [lat, lng]);

  return (
    <>
      <Header />
      <Box style={{ height: "100vh", width: "100%" }}>
        <Text
          fontFamily="游ゴシック, YuGothic, sans-serif"
          fontSize={"25px"}
          fontWeight={"bold"}
          textAlign={"center"}>
          検索結果
        </Text>
        {location && <MapContainer location={location} places={places} />}
      </Box>

      <Flex
        justifyContent="center"
        alignItems="center"
        bg="#F7FAFC"
        padding="20px"
      >
        <Button
          onClick={() => router.push("/")}
          fontWeight="bold"
          borderRadius="50px"
          px={20}
          py={10}
          bg="#38B6FF"
          color="white"
          mt="40px"
          fontFamily="游ゴシック, YuGothic, sans-serif"
          cursor="pointer"
          _hover={{ cursor: "pointer" }}
          width="200px"
        >
          戻る
        </Button>
      </Flex>
    </>
  );
};

export default ResultsPage;
