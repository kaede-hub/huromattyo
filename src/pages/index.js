import Header from "@/components/Header";
import { useRouter } from "next/router";
import MapContainer from '../components/MapContainer';
import { Flex, Button, Box } from '@chakra-ui/react';


const IndexPage = () => {
  const router = useRouter();

  const searchNearbyPlaces = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        router.push(`/results?lat=${pos.lat}&lng=${pos.lng}`);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <Box>
      <Header />
      <Box mt="40px" >
        <MapContainer />
      </Box>
      <Flex justifyContent="center">
        <Button
          onClick={() => router.push("/results")}
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
        >
          周辺付近のジムと銭湯・サウナを探す
        </Button>
      </Flex>
    </Box>
  );
};

export default IndexPage;
