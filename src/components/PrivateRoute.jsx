
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/authSelectors.js';

const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    console.log(" isLoggedIn,isRefreshing", isLoggedIn, isRefreshing)
    const shouldRedirect = !isLoggedIn && !isRefreshing;
    return shouldRedirect ? <Navigate to={redirectTo}/>  : Component ;
};

export default PrivateRoute;