import ContinentData from '../../data/continents'
import countryDetails from '../../data/countries'
import { useParams, Link } from 'react-router-dom'

function Country() {
  const params = useParams<{ name: string; code: string }>()

  if (!params.name || !params.code) {
    return <p>Invalid parameters</p>
  }

  const continent = ContinentData[params.name]
  if (!continent) {
    return <p>Continent not found</p>
  }

  const country = continent.countries.find((item) => item.code === params.code)
  if (!country) {
    return <p>Country not found</p>
  }

  const countryDetail = countryDetails.find((item) => item.code === params.code)

  if (!countryDetail) {
    return <p>Country details not found</p>
  }

  const {
    name,
    capital,
    areaSqKms,
    population,
    currencyCode,
    currencyName,
    flag,
    image,
    neighbours,
  } = countryDetail

  const neighboringCountries = neighbours.split(',').map((neighbour) => {
    const neighborCountry = Object.values(ContinentData)
      .flatMap((continent) => continent.countries)
      .find((country) => country.code === neighbour)

    return neighborCountry ? (
      <li key={neighborCountry.code}>
        <Link to={`/continents/${params.name}/${neighborCountry.code}`}>
          {neighborCountry.name}
        </Link>
      </li>
    ) : null
  })

  return (
    <div>
      <h1>
        {flag}
        {name}
      </h1>
      {image && <img src={`/images/${image}`} alt={name} />}
      <p>
        <strong>Capital:</strong> {capital}
      </p>
      <p>
        <strong>Area:</strong> {areaSqKms} sq.km
      </p>
      <p>
        <strong>Population:</strong> {population}
      </p>
      <p>
        <strong>Currency:</strong> {currencyName} ({currencyCode})
      </p>

      <h2>Neighboring Countries:</h2>
      {neighboringCountries.length > 0 ? (
        <ul>{neighboringCountries}</ul>
      ) : (
        <p>No neighboring countries listed.</p>
      )}
    </div>
  )
}

export default Country
