import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card/index";

function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  let CountryCards = countries.map((country, index) => {
    return (
      <Link to={`/${country.name.common}`} key={index}>
        <Card>
          <Card.Img imgSrc={country.flags.svg} />
          <Card.Content>
            <Card.Header>
              <Card.Title>{country.name.common}</Card.Title>
            </Card.Header>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
          </Card.Content>
        </Card>
      </Link>
    );
  });

  return(
    <div className="container">{CountryCards}</div>
  )

}
export default Home