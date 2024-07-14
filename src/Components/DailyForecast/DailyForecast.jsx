import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import DailyForecastDetails from "../DailyForecastDetails/DailyForecastDetails";

const openWeather_Api_key = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

/* eslint-disable react/prop-types */
const DailyForecast = ({ cityInfo }) => {
  const {
    data: dailyWeather,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["hourly", cityInfo.latitude, cityInfo.longitude],
    queryFn: async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${cityInfo.latitude}&lon=${cityInfo.longitude}&appid=${openWeather_Api_key}&units=metric`
      );

      return res.data.list;
    },
  });

  return (
    <div className=" max-w-6xl mx-auto">
      <h1 className="text-2xl lg:text-4xl font-semibold text-center mt-4">
        Daily Weather Forecast
      </h1>
      {isPending ? (
        <div>
          {" "}
          <div className=" my-4 bg-white rounded-lg">
            <div className="collapse-title">
              <div className="flex items-center max-md:py-1 justify-between animate-pulse">
                <div className="flex gap-1 flex-col md:flex-row">
                  <div className="w-16 h-4 bg-gray-300 rounded"></div>
                  <div className="w-16 h-4 bg-gray-300 rounded"></div>
                </div>
                <div className="uppercase hidden md:flex">
                  <div className="w-32 h-4 bg-gray-300 rounded"></div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex gap-1">
                  <div className="w-8 h-4 bg-gray-300 rounded"></div>
                  <div className="w-8 h-4 bg-gray-300 rounded"></div>
                  <sup className="w-4 h-4 bg-gray-300 rounded"></sup>
                </div>
              </div>
            </div>
          </div>
          <div className=" my-4 bg-white rounded-lg">
            <div className="collapse-title">
              <div className="flex items-center justify-between animate-pulse max-md:py-1 ">
                <div className="flex gap-1 flex-col md:flex-row">
                  <div className="w-16 h-4 bg-gray-300 rounded"></div>
                  <div className="w-16 h-4 bg-gray-300 rounded"></div>
                </div>
                <div className="uppercase hidden md:flex">
                  <div className="w-32 h-4 bg-gray-300 rounded"></div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex gap-1">
                  <div className="w-8 h-4 bg-gray-300 rounded"></div>
                  <div className="w-8 h-4 bg-gray-300 rounded"></div>
                  <sup className="w-4 h-4 bg-gray-300 rounded"></sup>
                </div>
              </div>
            </div>
          </div>
          <div className=" my-4 bg-white rounded-lg">
            <div className="collapse-title">
              <div className="flex items-center justify-between animate-pulse max-md:py-1 ">
                <div className="flex gap-1 flex-col md:flex-row">
                  <div className="w-16 h-4 bg-gray-300 rounded"></div>
                  <div className="w-16 h-4 bg-gray-300 rounded"></div>
                </div>
                <div className="uppercase hidden md:flex">
                  <div className="w-32 h-4 bg-gray-300 rounded"></div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex gap-1">
                  <div className="w-8 h-4 bg-gray-300 rounded"></div>
                  <div className="w-8 h-4 bg-gray-300 rounded"></div>
                  <sup className="w-4 h-4 bg-gray-300 rounded"></sup>
                </div>
              </div>
            </div>
          </div>
          <div className=" my-4 bg-white rounded-lg">
            <div className="collapse-title">
              <div className="flex items-center justify-between animate-pulse max-md:py-1 ">
                <div className="flex gap-1 flex-col md:flex-row">
                  <div className="w-16 h-4 bg-gray-300 rounded"></div>
                  <div className="w-16 h-4 bg-gray-300 rounded"></div>
                </div>
                <div className="uppercase hidden md:flex">
                  <div className="w-32 h-4 bg-gray-300 rounded"></div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex gap-1">
                  <div className="w-8 h-4 bg-gray-300 rounded"></div>
                  <div className="w-8 h-4 bg-gray-300 rounded"></div>
                  <sup className="w-4 h-4 bg-gray-300 rounded"></sup>
                </div>
              </div>
            </div>
          </div>
          <div className=" my-4 bg-white rounded-lg">
            <div className="collapse-title">
              <div className="flex items-center justify-between animate-pulse max-md:py-1 ">
                <div className="flex gap-1 flex-col md:flex-row">
                  <div className="w-16 h-4 bg-gray-300 rounded"></div>
                  <div className="w-16 h-4 bg-gray-300 rounded"></div>
                </div>
                <div className="uppercase hidden md:flex">
                  <div className="w-32 h-4 bg-gray-300 rounded"></div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex gap-1">
                  <div className="w-8 h-4 bg-gray-300 rounded"></div>
                  <div className="w-8 h-4 bg-gray-300 rounded"></div>
                  <sup className="w-4 h-4 bg-gray-300 rounded"></sup>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : isError ? (
        <div className="flex flex-col mt-4 rounded-lg w-full h-full justify-center items-center bg-white">
          <h1 className="text-3xl py-2 text-blue-500 font-semibold text-center">
            Forecast Data Not Found!
          </h1>
        </div>
      ) : (
        dailyWeather.map((weather) => (
          <DailyForecastDetails key={weather.dt} weather={weather} />
        ))
      )}
    </div>
  );
};

export default DailyForecast;
