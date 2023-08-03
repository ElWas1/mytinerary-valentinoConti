import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage.jsx';
import Index from './pages/index/Index.jsx';
import Main from './layouts/Main.jsx';
import './App.css'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main />,
    children: [
      { path: '/', element: <Index />}
    ],
    errorElement: <ErrorPage />
  },
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
