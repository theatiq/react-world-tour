import React, { useState } from "react";
import "./Country.css";

export default function Country({ country, handleVisitedCountry }) {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  
  const { name, flags, population, area, cca3 } = country;
  return (
    <div className={`country ${visited && "visited"}`}>
      <h3 style={{ color: visited ? "purple" : "black" }}>
        Name: {name?.common}{" "}
      </h3>
      <img src={flags.png} alt="" />
      <h3>Population: {population}</h3>
      <h3>Area: {area}</h3>
      <h3>Code: {cca3}</h3>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <br />
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I have visited the country" : "I wand to visit"}
    </div>
  );
}
