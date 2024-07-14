/* eslint-disable react/prop-types */

import { FaTemperatureHalf } from "react-icons/fa6";
import { TbLocation } from "react-icons/tb";

/* eslint-disable no-unused-vars */
const Weather = ({ WeatherData, city }) => {
  return (
    <div className="font-poppins space-y-8 lg:space-y-12">
      <div className="flex justify-between flex-col md:flex-row items-center mt-6">
        <p className=" lg:text-3xl justify-center  text-center font-semibold text-white flex gap-1">
          <TbLocation /> {city}
        </p>
        <p className="text-lg lg:text-3xl font-semibold text-white items-center flex gap-1">
          <img className="w-12 h-12" src="/weathericons/wind.png" alt="" />{" "}
          {Math.round((WeatherData.wind.speed * 3600) / 1000)} Km/h
        </p>
      </div>
      <div className="flex justify-center  gap-20 items-center">
        <div className="w-32 lg:w-44 flex flex-col justify-center items-center">
          <img
            className=""
            src={`/weathericons/${WeatherData.weather[0].icon}.png`}
            alt="weatherIcon"
          />
          <p className="text-white uppercase lg:text-xl font-bold">
            {WeatherData.weather[0].description}
          </p>
        </div>
        <div className="flex justify-center">
          <h1 className="text-7xl lg:text-9xl text-white text-center">
            {Math.round(WeatherData?.main.temp)}
          </h1>
          <sup className="text-2xl lg:text-5xl text-white font-semibold">
            °C
          </sup>
        </div>
      </div>
      <div className="flex justify-between flex-col md:flex-row max-md:gap-2 items-center">
        <p className="text-lg lg:text-2xl font-semibold text-white flex gap-2">
          <img
            src="/weathericons/humidity.png"
            alt="feels like"
            className="w-8 h-full filter grayscale-0 indent-0"
          />
          Humidity
          <span className="text-xl lg:text-3xl font-semibold">
            {Math.round(WeatherData?.main.humidity)}%
          </span>
        </p>
        <p className="text-lg lg:text-2xl items-center font-semibold text-white flex gap-1">
          <FaTemperatureHalf className="text-white" />
          Feels Like
          <span className="text-xl lg:text-3xl font-semibold">
            {Math.round(WeatherData?.main.feels_like)}{" "}
            <sup className="text-white lg:text-xl font-semibold">°C</sup>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Weather;
