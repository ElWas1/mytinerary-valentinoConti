import { useParams } from "react-router-dom"

const UserProfile = () => {

    const { username } = useParams();
    
  return (
    <div>Usuario: {username}</div>
  )
}

export default UserProfile