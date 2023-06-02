import {useState, useEffect} from "react";
import axios from "axios";

const useGetCountriesQuery = () => {
  const [countries, setCountries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState((null)); // added brackets here
  
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true)
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryOptions = response.data.map((country) => ({
          name: country.name.common,
          flag: country.flags.png,
        }))
        .sort((a, b) => a.name.localeCompare(b.name)); // sorts the countries Alphabetically
        setLoading(false)
        setCountries(countryOptions);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  },[]); // Added empty dependency here
 
  return { countries, loading, error};
};
export default useGetCountriesQuery