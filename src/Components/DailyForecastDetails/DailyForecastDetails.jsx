/* eslint-disable react/prop-types */
const DailyForecastDetails = ({ weather }) => {
  const date = new Date(weather.dt_txt).toDateString();
  const time = new Date(weather.dt_txt).toLocaleTimeString();

  return (
    <div>
      <div className="collapse my-4  bg-white rounded-lg">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title ">
          <div className="flex items-center justify-between">
            <p className="flex gap-1 flex-col md:flex-row">
              {date === new Date().toDateString() ? (
                <>
                  <span> Today </span>
                  <span>{time}</span>
                </>
              ) : (
                <>
                  <span> {date} </span>
                  <span>{time}</span>
                </>
              )}
            </p>
            <span className="uppercase hidden md:flex">
              {weather.weather[0].description}
            </span>
            <div className="flex justify-center items-center">
              <img
                className="w-10 h-full brightness-75"
                src={`/weathericons/${weather.weather[0].icon}.png`}
                alt=""
              />
            </div>
            <p>
              {Math.round(weather.main.temp)} /{" "}
              {Math.round(weather.main.feels_like)} <sup>°C</sup>
            </p>
          </div>
        </div>
        <div className="collapse-content">
          <div className="grid grid-cols-2  md:grid-cols-3 gap-2 lg:gap-4 justify-between">
            <p className="max-md:text-sm">
              Cloud Cover: {weather.clouds.all} %{" "}
            </p>
            <p className="max-md:text-sm">
              Humidity: {weather.main.humidity} %
            </p>
            <p className="max-md:text-sm">
              Temperature: {Math.round(weather.main.temp)}
              <sup>°C</sup>
            </p>
            <p className="max-md:text-sm">
              Feels Like: {Math.round(weather.main.feels_like)}
              <sup>°C</sup>
            </p>
            <p className="max-md:text-sm">
              Visibility: {Math.round(weather.visibility / 1000)} Km{" "}
            </p>
            <p className="max-md:text-sm">
              Wind Speed: {Math.round((weather.wind.speed * 3600) / 1000)} Km/h{" "}
            </p>
            <p className="max-md:text-xs">
              Min Temperature: {Math.round(weather.main.temp_min)}
              <sup>°C</sup>
            </p>
            <p className="max-md:text-xs">
              Max Temperature: {Math.round(weather.main.temp_max)}
              <sup>°C</sup>
            </p>
            <p className="hidden md:flex">
              Expected Rain:{" "}
              {weather.rain ? (
                <>
                  {weather.rain["3h"]} CM <sup>3</sup>
                </>
              ) : (
                "Not Available"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyForecastDetails;
