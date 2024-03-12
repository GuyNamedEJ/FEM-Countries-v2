import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Borders from "../components/Borders";

function CountryDetail() {
  const [country, setCountry] = useState(null);
  let currencyArray = [];
  let params = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${params.name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]));
  }, [params.name]);

  country
    ? Object.values(country.currencies).map((currency) => {
        currencyArray.push(currency.name);
      })
    : null;

  return (
    <div className="country-detail-container">
      {country ? (
        <div className="country-detail">
          <div className="detail-flag">
            <img src={country.flags.svg} alt="" />
            <p className="flag-desc">{country.flags.alt}</p>
          </div>
          <div className="detail-content">
            <h2>{country.name.common}</h2>
            <div className="info">
              <div className="panel">
                <p>
                  <span className="label">Official Name: </span>
                  {country.name.official}
                </p>
                <p>
                  <span className="label">Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="label">Region: </span>
                  {country.region}
                </p>
                <p>
                  <span className="label">Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span className="label">Capital: </span>
                  {country.capital ? country.capital.join(", ") : "No Capital"}
                </p>
              </div>
              <div className="panel">
                <p>
                  <span className="label">Top Level Domain: </span>
                  {country.tld}
                </p>
                <p>
                  <span className="label">Currencies: </span>
                  {currencyArray.join(", ")}
                </p>
                <p>
                  <span className="label">Languages: </span>
                  {country.subregion}
                </p>
              </div>
            </div>
            <div className="borders">
                {country.borders ? <Borders borders={country.borders} /> : null}
            </div>
          </div>
        </div>
      ) : (
        <h2>Loadings...</h2>
      )}
    </div>
  );
}
export default CountryDetail;
