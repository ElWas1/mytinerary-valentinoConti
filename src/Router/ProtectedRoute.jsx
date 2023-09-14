import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, path }) => {

    let user = useSelector(store => store.user.user)

    if (user) return <Navigate to={path} />

    return children
}

export default ProtectedRoute