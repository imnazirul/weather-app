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
    isError,
    refetch,
  } = useQuery({
    queryKey: ["weather", cityInfo.latitude, cityInfo.longitude],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityInfo.latitude}&lon=${cityInfo.longitude}&appidd=${openWeather_Api_key}&units=${unit}`
      );
      return res.data;
    },
    refetchOnWindowFocus: false,
  });

  return (
    <div className="">
      {isPending ? (
        <div className=" bg-[#2b83e7] max-w-5xl mx-auto p-8 rounded-lg">
          <div className="max-w-lg  mx-auto">
            <SearchBar handleInputChange={handleOnChange} />
          </div>
          <div className="font-poppins space-y-8 lg:space-y-12">
            <div className="flex justify-between flex-col md:flex-row items-center mt-6">
              <p className=" skeleton w-52 h-10"></p>
              <p className=" skeleton w-52 h-10"></p>{" "}
            </div>
            <div className="flex justify-center  gap-20 items-center">
              <div className="w-32 lg:w-44 flex flex-col justify-center items-center">
                <div className="relative w-72 h-40">
                  <div className="absolute w-28 h-28 bg-gray-200 rounded-full left-10 top-10 animate-pulse"></div>
                  <div className="absolute w-40 h-40 bg-gray-300 rounded-full left-24 top-0 animate-pulse"></div>
                </div>
                <p className="skeleton w-28 h-4 mt-4"></p>
              </div>
              <div className="flex justify-center">
                <h1 className="skeleton w-32 h-32 rounded-full"></h1>
                <sup className="text-2xl lg:text-5xl text-white font-semibold">
                  °C
                </sup>
              </div>
            </div>
            <div className="flex justify-between flex-col md:flex-row max-md:gap-2 items-center">
              <p className="skeleton w-52 h-10"></p>
              <p className="skeleton w-52 h-10"></p>
            </div>
          </div>
        </div>
      ) : isError ? (
        <div className=" bg-[#2b83e7] max-w-5xl h-[500px] mx-auto p-8 rounded-lg">
          <div className="max-w-lg  mx-auto">
            <SearchBar />
          </div>
          <div className="flex flex-col w-full h-full justify-center items-center">
            <img
              className="w-48 mb-6"
              src="/weathericons/weather_err.png"
              alt="error"
            />
            <h1 className="text-7xl text-white font-semibold text-center">
              Not Found!
            </h1>
            <p className="text-center text-white text-xl mt-4">
              There Was an Error While Getting the Data. Refresh the Page or Try
              Again Later
            </p>
          </div>
        </div>
      ) : (
        <div className=" bg-[#2b83e7] max-w-5xl mx-auto p-8 rounded-lg">
          <div className="max-w-lg  mx-auto">
            <SearchBar handleInputChange={handleOnChange} />
          </div>

          <Weather WeatherData={WeatherData} city={city} />
        </div>
      )}
      <div className="">
        <DailyForecast cityInfo={cityInfo} />
      </div>
    </div>
  );
};

export default Home;
