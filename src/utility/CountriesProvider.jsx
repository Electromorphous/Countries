import React, { useContext, useEffect, useState, useMemo } from "react";

const CountriesContext = React.createContext();

export function useCountries() {
  return useContext(CountriesContext);
}

const useGetCountries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    return (
      await fetch("https://restcountries.com/v3.1/all").catch(console.log)
    ).json();
  };

  useEffect(() => {
    fetchCountries().then(setCountries);
  }, []);

  return useMemo(() => countries, [countries]);
};

export default function CountriesProvider({ children }) {
  const countries = useGetCountries();

  return (
    <CountriesContext.Provider value={countries}>
      {children}
    </CountriesContext.Provider>
  );
}
