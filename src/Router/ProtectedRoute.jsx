import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, path, allow }) => {

    const user = useSelector(store => store.user.user)

    if (user && allow === 'user') return children

    if (!user && allow === 'non-user') return children

    return <Navigate to={path} />
}

export default ProtectedRoute