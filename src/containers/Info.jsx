import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useCountries } from "../utility/CountriesProvider";

function Info() {
  let { name } = useParams();

  const countries = useCountries();

  const [country, setCountry] = useState({});

  async function fetchCountry() {
    return (
      await fetch(
        `https://restcountries.com/v3.1/name/${name.toLowerCase()}`
      ).catch(console.log)
    )
      .json()
      .then((res) => res[0]);
  }

  useEffect(() => {
    if (countries.length > 0) {
      for (let obj of countries) {
        if (obj.name.common.toLowerCase() === name.toLowerCase()) {
          setCountry(obj);
          break;
        }
      }
    }
    fetchCountry().then(setCountry);
  }, []);

  useMemo(() => country, [country]);

  return (
    <>
      {!!(country && country.name) ? country.name.common : "country not found"}
    </>
  );
}

export default Info;
