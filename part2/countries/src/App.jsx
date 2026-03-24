import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

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

  return (
    <div>
      <div>
        find countries{" "}
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
    </div>
  );
};

export default App;
