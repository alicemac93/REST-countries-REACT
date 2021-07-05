import React  from "react";
import { useTheme } from "./ThemeContext"

function CountriesList({ countries }) {
  
  const darkTheme = useTheme() // const darkTheme = useContext(ThemeContext)

  const ThemeStyles = {
    backgroundColor: darkTheme ? "#053742" : "#E8F0F2",
    color: darkTheme ? "#FFF" : "#000",
  };

  return (
    <div style={ThemeStyles}>
      {countries.map((country) => (
        <div key={country.alpha3Code}>
          <img
            style={{ width: "300px" }}
            src={country.flag}
            alt={`flag of ${country.name}`}
          />
          <h2>{country.name}</h2>
          <p>{`Population: ${country.population}`}</p>
          <p>{`Region: ${country.region}`}</p>
          <p>{`Capital: ${country.capital}`}</p>
        </div>
      ))}
    </div> 
  );
}

export default CountriesList;
