import { RouterProvider } from 'react-router-dom';
import router from './Router/Router.jsx'
import './App.css'

import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { user_renew_token, user_token } from './store/actions/userActions.js';
import Swal from 'sweetalert2';

function App() {

  const userIsLoggedIn = useSelector(store => store.user?.token)

  let dispatch = useDispatch();

  useEffect(() => {
    let url = import.meta.env.VITE_GET_USER_TOKEN_API_URL
    const user = localStorage.getItem('user')
    const token = localStorage.getItem('token')
    const configs = { headers: { 'Authorization': `Bearer ${token}` } }

    if (token) {
      axios.post(url, null, configs)
        .then(res => dispatch(user_token(res.data.user)))
        .catch(() => {
          localStorage.removeItem('token')
          if (user) {
            localStorage.removeItem('user')
            Swal.fire({
              title: "Your session has expired.",
              text: "Please, proceed to the login page in order to renew it.",
              icon: "warning"
            });
          }
        })
    } else if (user) {
      localStorage.removeItem('user')
      Swal.fire({
        title: "Your session has expired.",
        text: "Please, proceed to the login page in order to renew it.",
        icon: "warning"
      });
    }
    if (userIsLoggedIn) {
      const interval = setInterval(() => {
        const updatedToken = localStorage.getItem('token');
        dispatch(user_renew_token(updatedToken));
      }, 600000);
      return () => clearInterval(interval);
    }
  }, [userIsLoggedIn])

  return (
    <RouterProvider router={router} />
  )
}

export default App
