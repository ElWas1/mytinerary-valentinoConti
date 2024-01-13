import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { get_user_by_username } from '../store/actions/userActions';

const UserProfile = () => {

  const { username } = useParams();
  const dispatch = useDispatch();
  const visitedUser = useSelector(store => store.user.visitedUser)

  useEffect(() => {
    dispatch(get_user_by_username(username))
  }, [])

  return (
    <div className='flex flex-col items-center gap-4'>
      <img className='max-h-48 max-w-48 rounded-full' src={visitedUser.image} alt="Profile Photo" />
      <p>Usuario: {visitedUser.username}</p>
      <p>Nombre: {visitedUser.name}</p>
      <p>Email: {visitedUser.email}</p>
      <p>Rol: <span className={visitedUser.role === 'admin' ? 'text-red-900' : ''}>{visitedUser.role}</span></p>
      <br />
      <p className={visitedUser.online ? 'text-green-500' : 'text-gray-500'}>{visitedUser.online ? 'Active now' : 'Last seen X time ago'}</p>
      <br />
    </div>
  )
}

export default UserProfile