import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useRedirectHome = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        !user && navigate('/')
    }, [user])

    useEffect(() => {
        user && navigate("/home")
    }, [user])
    
};