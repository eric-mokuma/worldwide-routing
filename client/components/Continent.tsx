import ContinentData from '../../data/continents'
import { useParams, Link } from 'react-router-dom'

function Continent() {
  const params = useParams<{ name: string }>()
  if (!params.name) {
    return null
  }

  const continent = ContinentData[params.name]
  if (!continent) {
    return <p>Continent not found</p>
  }

  const { image, countries } = continent

  const countriesList = countries.map((item) => (
    <li key={item.code}>
      <Link to={`/continents/${params.name}/${item.code}`}>{item.name}</Link>
    </li>
  ))

  return (
    <div>
      <h1>{params.name}</h1>
      <img src={`/images/${image}`} alt={params.name} />
      <h2>Countries:</h2>
      <ul>{countriesList}</ul>
    </div>
  )
}

export default Continent
