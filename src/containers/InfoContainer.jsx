import React from "react";
import Header from "./Header";
import Info from "./Info";
import CountriesProvider from "../utility/CountriesProvider";

function InfoContainer() {
  return (
    <CountriesProvider>
      <Header />
      <Info />
    </CountriesProvider>
  );
}

export default InfoContainer;
