/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const WeatherDetails = ({ WeatherData }) => {
  return (
    <div>
      <h1 className="text-2xl lg:text-4xl font-semibold text-center text-blue-500">
        Current Weather
      </h1>
      <div className="space-y-4 mt-4 lg:mt-8 ">
        <p className="text-sm lg:text-xl bg-white rounded-lg px-2 py-2">
          <span className="font-semibold">{WeatherData.clouds.all} %</span>{" "}
          Clouds Covered
        </p>
        <p className="text-sm lg:text-xl bg-white rounded-lg px-2 py-2">
          {" "}
          Visibility:
          <span className="font-semibold">
            {" "}
            {WeatherData.visibility / 1000} Km
          </span>
        </p>
        <p className=" hidden lg:flex text-sm lg:text-xl bg-white rounded-lg px-2 py-2">
          Pressure:{" "}
          <span className="font-semibold">
            {" "}
            {WeatherData.main.pressure} mbar
          </span>
        </p>
        <p className="text-sm lg:text-xl bg-white rounded-lg px-2 py-2">
          Maximum Temperature:{" "}
          <span className="font-bold">
            {WeatherData.main.temp_max}
            <sup>°C</sup>
          </span>
        </p>
        <p className=" text-sm lg:text-xl bg-white rounded-lg px-2 py-2">
          Minimum Temperature:{" "}
          <span className="font-bold">
            {WeatherData.main.temp_min}
            <sup>°C</sup>
          </span>
        </p>
      </div>
    </div>
  );
};

export default WeatherDetails;
