import CountryData from '../../data/countries'
import { useParams, Link } from 'react-router-dom'

function NeighboringCountry() {
  const params = useParams<{ name: string; code: string }>()

  if (!params.name || !params.code) {
    return <p>Invalid parameters</p>
  }

  const country = CountryData.find((item) => item.code === params.code)

  if (!country) {
    return <p>Country not found</p>
  }

  const { name, neighbours } = country

  const neighborsList = neighbours.split(',').map((neighbour) => {
    const neighborContinent = Object.values(CountryData).find(() =>
      CountryData.some((country) => country.code === neighbour),
    )

    const neighborContinentName = neighborContinent
      ? CountryData.find((country) => country.code === neighbour)
      : 'Unknown'

    return (
      <li key={neighbour}>
        <Link to={`/continents/${neighborContinentName}/${neighbour}`}>
          {neighbour}
        </Link>
      </li>
    )
  })
  console.log(neighborsList)
  return (
    <div>
      <h1>{name}</h1>
      <h2>Neighboring Countries:</h2>
      {neighborsList.length > 0 ? (
        <ul>{neighborsList}</ul>
      ) : (
        <p>No neighboring countries listed.</p>
      )}
    </div>
  )
}

export default NeighboringCountry
