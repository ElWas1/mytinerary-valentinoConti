import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../ErrorPage.jsx';
import Home from '../pages/Home.jsx';
import Cities from '../pages/Cities.jsx';
import Main from '../layouts/Main.jsx';
import NoBackground from "../layouts/NoBackground.jsx";
import CityDetails from "../pages/CityDetails.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> }
    ],
    errorElement: <ErrorPage />
  },
  {
    path: '/cities',
    element: <NoBackground />,
    children: [
      { path: '/cities', element: <Cities /> },
      { path: '/cities/:id', element: <CityDetails /> }
    ],
    errorElement: <ErrorPage />
  }
])

export default router;