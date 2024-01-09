import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../ErrorPage.jsx';
import Home from '../pages/Home.jsx';
import Cities from '../pages/Cities.jsx';
import Main from '../layouts/Main.jsx';
import NoBackground from "../layouts/NoBackground.jsx";
import CityDetails from "../pages/CityDetails.jsx";
import Sign from "../pages/Sign.jsx";
import ProtectedRoute from './ProtectedRoute.jsx';
import UserProfile from "../pages/UserProfile.jsx";

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
  },
  {
    path: '/sign',
    element: <NoBackground />,
    children: [
      { path: '/sign', element: (<ProtectedRoute path='/'><Sign /></ProtectedRoute>) }
    ],
    errorElement: <ErrorPage />
  },
  {
    path: '/user',
    element: <NoBackground />,
    children: [
      { path: '/user/:username', element: <UserProfile /> }
    ],
    errorElement: <ErrorPage />
  }
])

export default router;