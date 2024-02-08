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
import UserSettings from "../pages/UserSettings.jsx";

const router = createBrowserRouter([
  {
    exact: true,
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> }
    ],
    errorElement: <ErrorPage />
  },
  {
    exact: true,
    path: '/cities',
    element: <NoBackground />,
    children: [
      { path: '/cities', element: <Cities /> },
      { path: '/cities/:id', element: <CityDetails /> }
    ],
    errorElement: <ErrorPage />
  },
  {
    exact: true,
    path: '/sign',
    element: <NoBackground />,
    children: [
      { path: '/sign', element: (<ProtectedRoute allow='non-user' path='/'><Sign /></ProtectedRoute>) }
    ],
    errorElement: <ErrorPage />
  },
  {
    exact: true,
    path: '/user',
    element: <NoBackground />,
    children: [
      { path: '/user/:username', element: <UserProfile /> },
      { path: '/user/settings', element: (<ProtectedRoute allow={'user'} path='/'><UserSettings /></ProtectedRoute>) }
    ],
    errorElement: <ErrorPage />
  }
])

export default router;