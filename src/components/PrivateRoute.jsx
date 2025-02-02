
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors.js';

const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return !isLoggedIn ? <Navigate to={redirectTo}/> : Component ;
};

export default PrivateRoute;