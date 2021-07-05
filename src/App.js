import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CountriesList from "./components/CountriesList";
import ThemeToggler from "./components/ThemeToggler";
import { ThemeProvider } from "./components/ThemeContext"

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        if (response.ok) {
          const jsonResponse = await response.json();
          setCountries(jsonResponse);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <ThemeProvider>
        <header className="App-header">
          <ThemeToggler />
        </header>
        <SearchBar />
        <CountriesList 
          countries={countries} />
      </ThemeProvider>
    </>
  );
}

export default App;
