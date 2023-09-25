import React from 'react';
import { useRedirectHome } from '../../hooks/useRedirectHome';

const Favorites = () => {
    useRedirectHome();
    
    return (
        <div style={{ color: "red" }}>Favorites</div>
    );
};

export default Favorites;