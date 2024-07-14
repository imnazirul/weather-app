/* eslint-disable no-unused-vars */
import { useState } from "react";
import SearchBar from "../Components/SearchBar/SearchBar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Weather from "../Components/Weather/Weather";
import DailyForecast from "../Components/DailyForecast/DailyForecast";

const openWeather_Api_key = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

const Home = () => {
  const [city, setCity] = useState("Dhaka, BD");
  const [unit, setUnit] = useState("metric");
  const [cityInfo, setCityInfo] = useState({
    latitude: 23.728888888,
    longitude: 90.394444444,
  });
  const handleOnChange = (data) => {
    // console.log(data);
    setCity(data.label);
    const latitude = data.value.split(" ")[0];
    const longitude = data.value.split(" ")[1];
    const cityData = {
      latitude: latitude,
      longitude: longitude,
    };
    setCityInfo(cityData);
    refetch();
  };

  const {
    data: WeatherData,
    isPending,
    // isError,
    refetch,
  } = useQuery({
    queryKey: ["weather", cityInfo.latitude, cityInfo.longitude],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityInfo.latitude}&lon=${cityInfo.longitude}&appid=${openWeather_Api_key}&units=${unit}`
      );
      console.log(res.data);
      return res.data;
    },
  });

  if (isPending) {
    return <h1 className="text-5xl">Loading...</h1>;
  }

  return (
    <div className="">
      <div className=" bg-[#2b83e7] max-w-5xl mx-auto p-8 rounded-lg">
        <div className="max-w-lg  mx-auto">
          <SearchBar handleInputChange={handleOnChange} />
        </div>
        <Weather WeatherData={WeatherData} city={city} />
      </div>
      <div className="">
        <DailyForecast cityInfo={cityInfo} />
      </div>
    </div>
  );
};

export default Home;
