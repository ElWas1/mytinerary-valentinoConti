import { useEffect } from 'react'
import { useParams, Link as Anchor } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { get_user_by_username } from '../store/actions/userActions';
import Swal from 'sweetalert2';
import { change_bg } from '../store/actions/pageActions.js';

const UserProfile = () => {

  const { username } = useParams();
  const dispatch = useDispatch();
  const visitedUser = useSelector(store => store.user.visitedUser)
  const user = useSelector(store => store.user.user)

  useEffect(() => {
    dispatch(get_user_by_username(username))
    dispatch(change_bg("/snow.webp"))
  }, [username])

  const handleChangeProfilePhoto = () => {
    Swal.fire({
      title: "Unavailable feature.",
      text: "This feature is unavailable at the moment. Stay tuned for new ones!",
      icon: "info"
    })
  }

  return (
    <div className='flex flex-col items-center justify-center gap-4 min-h-full'>
      <div className='relative'>
        <img className='w-48 rounded-full relative' src={visitedUser.image} alt="Profile Photo" />
        <button onClick={handleChangeProfilePhoto} className=''>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={(user?.email === visitedUser.email && user?.username === visitedUser.username) ? 'absolute rounded-3xl outline outline-1 outline-white bg-black right-0 bottom-0 p-3 w-12 h-12 hover:bg-gray-800 duration-300' : 'hidden'}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
          </svg>
        </button>
      </div>
      <p>User: {visitedUser.username}</p>
      <p>Name: {visitedUser.name}</p>
      <p>Email: {visitedUser.email}</p>
      <p>Role: <span className={visitedUser.role === 'admin' ? 'text-red-900 font-bold' : 'font-bold'}>{visitedUser.role}</span></p>
      <p className='text-gray-400'>Reputation: 0</p>
      <p className={visitedUser.online ? 'text-green-500' : 'text-gray-500'}>{visitedUser.online ? 'Active now' : 'Last seen X time ago'}</p>
      <Anchor to={"/user/settings"} className={(user?.email === visitedUser.email && user?.username === visitedUser.username) ? 'bg-black outline outline-1 outline-white p-4 my-8 rounded-3xl hover:bg-gray-800 duration-300' : 'hidden'}>Edit Profile</Anchor>
    </div>
  )
}

export default UserProfile