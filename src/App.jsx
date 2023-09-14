import { RouterProvider } from 'react-router-dom';
import router from './Router/Router.jsx'
import './App.css'

import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { user_token } from './store/actions/userActions.js';

function App() {

  let dispatch = useDispatch();

  useEffect(() => {
    let url = `http://localhost:8000/api/auth/token`
    let token = localStorage.getItem('token')

    if (token) {
      let configs = { headers: { 'Authorization': `Bearer ${token}` } }

      axios.post(url, null, configs)
        .then(res => dispatch(user_token(res.data.user)))
        .catch(err => console.log(err))
    }

  }, [])

  return (
    <RouterProvider router={router} />
  )
}

export default App
