import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors.js';
import { useEffect } from 'react';

const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
    const location = useLocation();
    const isLoggedIn = useSelector(selectIsLoggedIn);

    useEffect(() => {
        if (isLoggedIn) {
            localStorage.removeItem('registerFormData');
            localStorage.removeItem('loginFormData');
            localStorage.setItem('lastPrivatePath', location.pathname);
        }
    }, [location, isLoggedIn]);

    return !isLoggedIn ? <Navigate to={redirectTo}/> : Component;
};

export default PrivateRoute;