import { createBrowserRouter } from "react-router-dom";
import ErrorPage from '../ErrorPage.jsx';
import Home from '../pages/Home.jsx';
import Cities from '../pages/Cities.jsx';
import Main from '../layouts/Main.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/cities', element: <Cities /> }
    ],
    errorElement: <ErrorPage />
  },
])

export default router;