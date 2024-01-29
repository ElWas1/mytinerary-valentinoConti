import { useEffect, useRef } from 'react'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { get_user_by_username } from '../store/actions/userActions';

const UserProfile = () => {

  const form = useRef(null)
  const editProfileButton = useRef(null)
  const { username } = useParams();
  const dispatch = useDispatch();
  const visitedUser = useSelector(store => store.user.visitedUser)
  const user = useSelector(store => store.user.user)

  useEffect(() => {
    dispatch(get_user_by_username(username))
  }, [username])

  const handleShowOptions = () => {
    if (user?.email === visitedUser.email && user?.username === visitedUser.username) {
      (form.current.className === 'hidden') ? form.current.className = 'my-12 flex flex-col gap-2' : form.current.className = 'hidden'
    }
  }

  const handleSubmitEditProfile = (e) => {
    e.preventDefault()
  }

  return (
    <div className='flex flex-col items-center gap-4 my-8'>
      <div className='relative'>
        <img className='w-48 rounded-full relative' src={visitedUser.image} alt="Profile Photo" />
        <button className=''>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={(user?.email === visitedUser.email && user?.username === visitedUser.username) ? 'absolute rounded-3xl outline outline-1 outline-white bg-black right-0 bottom-0 p-3 w-12 h-12 hover:bg-gray-800 duration-300' : 'hidden'}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
          </svg>
        </button>
      </div>
      <p>User: {visitedUser.username}</p>
      <p>Name: {visitedUser.name}</p>
      <p>Email: {visitedUser.email}</p>
      <p>Role: <span className={visitedUser.role === 'admin' ? 'text-red-900' : ''}>{visitedUser.role}</span></p>
      <p className='text-gray-400'>Reputation: 0</p>
      <p className={visitedUser.online ? 'text-green-500' : 'text-gray-500'}>{visitedUser.online ? 'Active now' : 'Last seen X time ago'}</p>
      <button ref={editProfileButton} className={(user?.email === visitedUser.email && user?.username === visitedUser.username) ? 'bg-black outline outline-1 outline-white p-4 my-8 rounded-3xl hover:bg-gray-800 duration-300' : 'hidden'} onClick={handleShowOptions}>Edit Profile</button>
      <form className='hidden' ref={form} action={null} method={null} onSubmit={handleSubmitEditProfile}>
        <p>Security and profile info options</p>
        <label htmlFor="change_username">Change Username</label>
        <input className='bg-white text-black mb-12 p-1 rounded-md' type="text" name="change_username" id="change_username" />
        <label htmlFor="change_email">Change Email</label>
        <input className='bg-white text-black mb-12 p-1 rounded-md' type="email" name="change_email" id="change_email" />
        <legend>Password options</legend>
        <label htmlFor="old_password">Old Password</label>
        <input className='bg-white text-black mb-12 p-1 rounded-md' type="password" name="old_password" id="old_password" />
        <label htmlFor="new_password">New Password</label>
        <input className='bg-white text-black mb-12 p-1 rounded-md' type="password" name="new_password" id="new_password" />
        <label htmlFor="confirm_password">Confirm New Password</label>
        <input className='bg-white text-black mb-12 p-1 rounded-md' type="password" name="confirm_password" id="confirm_password" />
        <button className='bg-black p-4 my-8 rounded-3xl outline outline-1 outline-green-800 hover:bg-green-800 duration-300'>Save Changes</button>
      </form>
    </div>
  )
}

export default UserProfile