import { useEffect, useState } from 'react';
import { Link as Anchor } from 'react-router-dom';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix
} from "@material-tailwind/react";
import { useSelector, useDispatch } from 'react-redux';
import { user_signout } from '../../store/actions/userActions';
import Swal from 'sweetalert2';

const Navbar = ({ button }) => {

  const user = useSelector(store => store.user.user)

  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown)
  }

  const dispatch = useDispatch();

  const handleSignOutButton = () => {
    Swal.fire({
      title: 'Are you sure that you want to log out?',
      showDenyButton: true,
      confirmButtonText: 'Log out',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('You have been logged out!', '', 'success')
        const token = localStorage.getItem('token').toString()
        dispatch(user_signout(token))
      } else if (result.isDenied) {
        Swal.fire('You cancelled the action.', '', 'info')
      }
    })
  }

  button = [
    { title: 'Home', to: '/', id: 1 },
    { title: 'Cities', to: '/cities', id: 2 }
  ]

  return (
    <header className="z-20 relative backdrop-blur-xl dark:bg-gray-900/20">
      <div className="max-w-screen px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Anchor className="text-black dark:text-white" to="/">
              <h1 className='max-[600px]:text-xl text-3xl font-bold'>MyTinerary</h1>
            </Anchor>
          </div>
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {user ? <img className='w-12 h-12 rounded-3xl' src={user.image} alt="User Photo" /> : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
              </svg>)}
            </div>

            <div className="block">
              <button
                onClick={handleShowDropdown} className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <ul>
                {
                  button.map((e) => (
                    <li key={e.id}>
                      {
                        showDropdown
                          ? <Card className="text-white rounded-none bottom-0 left-[100vw/1.5] right-0 top-16 absolute h-[calc(100vh-4.4rem)] w-fit max-w-[20rem] shadow-xl shadow-blue-gray-900/5 bg-gray-600">
                            <div className="mb-2 flex items-center gap-4 p-4">
                              <img src="/suitcase.png" alt="brand" className="h-8 w-8" />
                              <Typography variant="h5" color="blue-gray">
                                Menu
                              </Typography>
                            </div>
                            <List>
                              {
                                button.map((e) => <ListItem className='bg-slate-600 mb-2 rounded-2xl backdrop-blur-xl block' to={e.to} key={e.id}><Anchor className='block w-full' key={e.id} to={e.to}>{e.title}</Anchor></ListItem>)
                              }
                              <hr className="my-2 border-blue-gray-50" />
                              <ListItem className={user ? 'bg-red-500 rounded-xl' : 'bg-teal-600 rounded-xl'}>
                                <ListItemPrefix>
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="pr-2 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </ListItemPrefix>
                                {user ? <button onClick={handleSignOutButton} className='block w-full bg-red-500' to='/signout'>Sign Out</button> : <Anchor className='block w-full' to='/sign'>Sign In</Anchor>}
                              </ListItem>
                              <hr className="my-2 border-blue-gray-50" />
                              MyTinerary 2023
                            </List>
                          </Card>
                          : null
                      }
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Navbar