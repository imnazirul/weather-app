/* eslint-disable react/prop-types */
const DailyWeather = ({ weather }) => {
  const date = new Date(weather.dt_txt).toDateString();
  const time = new Date(weather.dt_txt).toLocaleTimeString();
  console.log(weather);

  return (
    <div>
      <div className="collapse my-4 border-b bg-white border-white rounded-lg">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title ">
          <div className="flex items-center justify-between">
            <p>
              {date} {time}
            </p>
            <span className="uppercase">{weather.weather[0].description}</span>
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
          <div className="grid grid-cols-3 gap-4 justify-between">
            <p>Cloud Cover: {weather.clouds.all} % </p>
            <p>Humidity: {weather.main.humidity} %</p>
            <p>
              Temperature: {Math.round(weather.main.temp)} <sup>°C</sup>
            </p>
            <p>
              Feels Like: {Math.round(weather.main.feels_like)} <sup>°C</sup>
            </p>
            <p>Visibility: {Math.round(weather.visibility / 1000)} Km </p>
            <p>
              Wind Speed: {Math.round((weather.wind.speed * 3600) / 1000)}
              Km/h{" "}
            </p>
            <p>
              Min Temperature: {Math.round(weather.main.temp_min)}
              <sup>°C</sup>
            </p>
            <p>
              Max Temperature: {Math.round(weather.main.temp_max)}
              <sup>°C</sup>
            </p>
            <p>
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

export default DailyWeather;
