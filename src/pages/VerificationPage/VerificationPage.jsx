import React, { useEffect } from 'react'
import Loader from '../../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/authOperations';
import { setToken } from '../../redux/auth/authSlice';
import { useLocation, useNavigate } from 'react-router-dom';

export default function VerificationPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const urlParams = new URLSearchParams(location.search); 
    const token = urlParams.get('token'); 

    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.auth); 
    
    useEffect(() => {
        if (token) {
        dispatch(setToken(token));
        }
    }, [dispatch, token]); 
    
    useEffect(() => {
        if (token && !isLoggedIn) {
             
            dispatch(refreshUser()).unwrap().catch(() => {
                navigate('/login');
            });
        
            
        }
    }, [dispatch, token, isLoggedIn]);
    
    
    return (
        <>
            <Loader/>
        </>
  )
}
