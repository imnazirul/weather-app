/* eslint-disable react/prop-types */

import { MdOutlineWbSunny } from "react-icons/md";
import { TbLocation } from "react-icons/tb";

/* eslint-disable no-unused-vars */
const Weather = ({ WeatherData, city }) => {
  const sunrise = new Date(WeatherData.sys.sunrise).toLocaleTimeString();
  return (
    <div className="font-poppins space-y-6">
      <div className="flex justify-between mt-6">
        <p className="text-3xl font-bold text-white flex gap-1">
          <TbLocation /> {city}
        </p>
        {/* <p className="text-xl font-semibold text-white">{date}</p> */}
      </div>
      <div className="flex justify-center gap-16 items-center">
        <div className="w-44 flex flex-col justify-center items-center">
          <img
            className=""
            src={`/weathericons/${WeatherData.weather[0].icon}.png`}
            alt="weatherIcon"
          />
          <span className="text-white uppercase text-xl font-bold">
            {WeatherData.weather[0].description}
          </span>
        </div>
        <div className="flex justify-center">
          <h1 className="text-9xl text-white text-center">
            {Math.round(WeatherData?.main.temp)}
          </h1>
          <sup className="text-5xl text-white font-semibold">°C</sup>
        </div>
      </div>
      <div>
        <p>
          <MdOutlineWbSunny />
          Sunrise
          <span>{sunrise}</span>
        </p>
      </div>
    </div>
  );
};

export default Weather;
