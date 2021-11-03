import React, { useContext, useEffect, useState, useMemo } from "react";

const CountriesContext = React.createContext();

export function useCountries() {
  return useContext(CountriesContext);
}

export default function CountriesProvider({ children }) {
  const getCountries = () => {
    const [array, setArray] = useState([]);

    async function fetchCountries() {
      const data = await fetch("https://restcountries.com/v3.1/all").catch(
        (error) => {
          console.log(error);
        }
      );
      return data.json();
    }

    useEffect(() => {
      fetchCountries().then(setArray);
    }, []);

    return useMemo(() => {
      return { array };
    }, [array]);
  };

  const countries = getCountries().array;

  return (
    <CountriesContext.Provider value={countries}>
      {children}
    </CountriesContext.Provider>
  );
}
