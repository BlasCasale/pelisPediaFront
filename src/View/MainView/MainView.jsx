import React from 'react';
import Main from '../../components/Main/Main';
import { useSelector } from 'react-redux/es/hooks/useSelector';
const MainView = () => {
    const user = useSelector((state) => state.user);

    return (
        <>
            {user && <Main />}
        </>
    )
}

export default MainView