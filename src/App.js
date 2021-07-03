import SearchBar from "./components/SearchBar";
import CountriesList from "./components/CountriesList";
import React, { useEffect, useState } from "react";

function App() {
  
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        if (response.ok) {
          const jsonResponse = await response.json();
          setCountries(jsonResponse);
          console.log(countries);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <SearchBar />
      <CountriesList />
    </div>
  );
}

export default App;
