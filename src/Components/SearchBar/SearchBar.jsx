/* eslint-disable react/prop-types */
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Api_Url = import.meta.env.VITE_GEO_API_URL;

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_GEO_API_KEY,
    "x-rapidapi-host": import.meta.env.VITE_GEO_HOST_URL,
  },
};
const SearchBar = ({ handleInputChange }) => {
  const [searchText, setSearchText] = useState(null);

  const loadCities = async (searchInput) => {
    const response = await fetch(
      `${Api_Url}/cities?minPopulation=1000000&namePrefix=${searchInput}`,
      options
    );
    const data = await response.json();
    const CityOptions = data.data.map((city) => {
      return {
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      };
    });

    return { options: CityOptions };
  };

  const handleOnChange = (searchValue) => {
    setSearchText(searchValue);
    handleInputChange(searchValue);
  };

  return (
    <div>
      <AsyncPaginate
        debounceTimeout={600}
        placeholder="Enter City Name"
        value={searchText}
        onChange={handleOnChange}
        loadOptions={loadCities}
      />
    </div>
  );
};

export default SearchBar;
