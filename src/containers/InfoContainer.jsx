import React from "react";
import Header from "./Header";
import Info from "./Info";
import CountriesProvider, { useCountries } from "../utility/CountriesProvider";

function InfoContainer() {
  const countries = useCountries();
  return (
    <>
      {countries.length === 0 ? (
        <CountriesProvider>
          <Header />
          <Info />
        </CountriesProvider>
      ) : (
        <>
          <Header />
          <Info />
        </>
      )}
    </>
  );
}

export default InfoContainer;
