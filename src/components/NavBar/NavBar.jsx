import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const user = useSelector((state) => state.user);

    console.log(user)

    return (
        <>
            {
                user &&
                <header>
                    <h1>PelisPedia</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to={"/index"}>Inicio</Link>
                            </li>
                            <li>
                                <Link to={"/favorites"}>Favoritos</Link>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <span>{user.name} {user.last_name}</span>
                    </div>
                </header>
            }
        </>
    );
};

export default NavBar;