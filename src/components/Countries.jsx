import React, { useState, useEffect } from "react";

function Countries() {
  const [countries, setCountries] = useState([]);

  async function fetchCountries() {
    const data = await fetch("https://restcountries.com/v3.1/all");
    return data.json();
  }

  useEffect(() => {
    fetchCountries().then(setCountries);
  }, []);

  console.log(countries);

  return <div>Countrire</div>;
}

export default Countries;
