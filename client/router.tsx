import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import Country from './components/Country'
import Continent from './components/Continent'
import NeighboringCountry from './components/NeighboringCountry'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="continents/:name" element={<Continent />} />
      <Route path="continents/:name/:code" element={<Country />} />
      <Route
        path="continents/:name/:code/neighboring"
        element={<NeighboringCountry />}
      />
    </Route>,
  ),
)

export default router
