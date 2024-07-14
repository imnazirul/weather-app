import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import DailyWeather from "../DailyWeather/DailyWeather";

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

  if (isPending) {
    return <h1 className="text-5xl">Loading...</h1>;
  }
  if (isError) {
    return <h1 className="text-5xl text-center">Not Found</h1>;
  }
  return (
    <div className=" max-w-6xl mx-auto">
      <h1 className="text-2xl lg:text-4xl font-semibold text-center mt-4">
        Daily Weather Forecast
      </h1>
      {dailyWeather.map((weather) => (
        <DailyWeather key={weather.dt} weather={weather} />
      ))}
    </div>
  );
};

export default DailyForecast;
