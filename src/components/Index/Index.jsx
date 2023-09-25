import React from 'react';
import { useRedirectHome } from '../../hooks/useRedirectHome';
import { useSelector } from 'react-redux';

const Index = () => {
    const user = useSelector((state) => state.user);
    console.log(user)
    useRedirectHome();

    return (
        <>
            <div style={{ color: "red" }}>Index</div>
        </>
    );
};

export default Index;