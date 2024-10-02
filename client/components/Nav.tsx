import ContinentData from '../../data/continents'
import { Link } from 'react-router-dom'

const continentNames = Object.keys(ContinentData)
const newListContinents = continentNames.map((continent) => (
  <li key={continent}>
    <Link to={`/continents/${continent}`}>{continent}</Link>
  </li>
))

function Nav() {
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {newListContinents}
      </ul>
    </div>
  )
}

export default Nav
