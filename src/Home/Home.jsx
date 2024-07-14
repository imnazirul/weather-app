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
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityInfo.latitude}&lon=${cityInfo.longitude}&appid=${openWeather_Api_key}&units=${unit}`
      );
      return res.data;
    },
    refetchOnWindowFocus: false,
  });

  return (
    <div className="">
      {isPending ? (
        <div className=" bg-[#2b83e7] max-w-5xl mx-auto lg:h-[520px] p-8 rounded-lg">
          <div className="max-w-lg  mx-auto">
            <SearchBar handleInputChange={handleOnChange} />
          </div>
          <div className="font-poppins space-y-8 lg:space-y-12">
            <div className="flex justify-between flex-col md:flex-row items-center max-md:gap-2 mt-6">
              <p className=" skeleton w-52 h-6 lg:h-10"></p>
              <p className=" skeleton w-52 h-6 lg:h-10"></p>{" "}
            </div>
            <div className="flex justify-center  gap-24 items-center">
              <div className=" my-7 flex flex-col justify-center items-center">
                <div className=" w-14 h-14 lg:w-28 lg:h-28 bg-white rounded-full animate-ping"></div>

                <p className="skeleton w-24 lg:w-28 h-3 mx-auto lg:h-6  mt-4 md:mt-8"></p>
              </div>
              <div className="flex justify-center ">
                <h1 className="skeleton w-20 h-20 lg:w-32 lg:h-32 rounded-full"></h1>
                <sup className="text-2xl lg:text-5xl text-white font-semibold">
                  °C
                </sup>
              </div>
            </div>
            <div className="flex justify-between flex-col md:flex-row max-md:gap-2 items-center mt-8">
              <p className="skeleton w-40  lg:w-52 h-5 lg:h-10"></p>
              <p className="skeleton w-40 lg:w-52 h-5 lg:h-10"></p>
            </div>
          </div>
        </div>
      ) : isError ? (
        <div className=" bg-[#2b83e7] max-w-5xl h-[400px] lg:h-[500px] mx-auto p-8 rounded-lg">
          <div className="max-w-lg  mx-auto">
            <SearchBar />
          </div>
          <div className="flex flex-col w-full h-full justify-center items-center">
            <img
              className="w-24 lg:w-48 mb-3 lg:mb-6"
              src="/weathericons/weather_err.png"
              alt="error"
            />
            <h1 className="text-3xl lg:text-7xl text-white font-semibold text-center">
              Not Found!
            </h1>
            <p className="text-center text-white lg:text-xl mt-4">
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
