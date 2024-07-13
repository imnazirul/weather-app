import { useState } from "react";
import SearchBar from "../Components/SearchBar/SearchBar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const [cityInfo, setCityInfo] = useState({
    latitude: 23.728888888,
    longitude: 90.394444444,
  });
  const handleOnChange = (data) => {
    console.log(data);
    const latitude = data.value.split(" ")[0];
    const longitude = data.value.split(" ")[1];
    const cityData = {
      latitude: latitude,
      longitude: longitude,
    };
    setCityInfo(cityData);
  };

  const {
    data: WeatherData,
    isPending,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["weather", cityInfo.latitude, cityInfo.longitude],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          cityInfo.latitude
        }&lon=${cityInfo.longitude}&appid=${
          import.meta.env.VITE_OPEN_WEATHER_API_KEY
        }`
      );
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div>
      <div>
        <SearchBar handleInputChange={handleOnChange} />
      </div>
    </div>
  );
};

export default Home;
