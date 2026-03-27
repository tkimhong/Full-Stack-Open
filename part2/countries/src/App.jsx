import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const countriesToShow = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  });

  console.log("countries:", countries);
  console.log("search:", search);
  console.log("countriesToShow:", countriesToShow);

  const country = countriesToShow.length === 1 ? countriesToShow[0] : null;

  return (
    <div>
      <div>
        find countries{" "}
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div>
        {/* more than 10 matches, show too many matches */}
        {countriesToShow.length > 10 ? (
          <p>Too many matches, specify another filter</p>
        ) : selectedCountry ? (
          // user selected a country, show full details
          <div>
            <h1>{selectedCountry.name.common}</h1>
            <p>Capital {selectedCountry.capital}</p>
            <p>Area {selectedCountry.area}</p>

            <h3>Languages:</h3>
            <ul>
              {Object.values(selectedCountry.languages).map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
            <img
              src={selectedCountry.flags.png}
              alt={selectedCountry.name.common}
            />
          </div>
        ) : countriesToShow.length === 1 ? (
          // exactly 1 match, automatically show details
          <div>
            <h1>{country.name.common}</h1>
            <p>Capital {country.capital}</p>
            <p>Area {country.area}</p>

            <h3>Languages:</h3>
            <ul>
              {Object.values(country.languages).map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
            <img src={country.flags.png} alt={country.name.common} />
          </div>
        ) : (
          // otherwise show list with "Show" buttons
          countriesToShow.map((country) => {
            return (
              <div key={country.name.common}>
                {country.name.common}{" "}
                <button onClick={() => setSelectedCountry(country)}>
                  Show
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default App;
