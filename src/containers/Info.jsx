import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useCountries } from "../utility/CountriesProvider";

function Info() {
  let { name } = useParams();

  const countries = useCountries();

  const [country, setCountry] = useState({});

  useEffect(() => {
    for (let obj of countries) {
      if (obj.name.common.toLowerCase() === name.toLowerCase()) {
        setCountry(obj);
        break;
      }
    }
  }, [countries, name]);

  useMemo(() => country, [country]);

  return (
    <>
      {!!(country && country.name) ? country.name.common : "country not found"}
    </>
  );
}

export default Info;
