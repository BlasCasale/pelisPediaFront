import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { sign_out } from '../../redux/actions';
import { useRedirectHome } from '../../hooks/useRedirectHome';

const NavBar = () => {
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

    useRedirectHome()

    return (
        <>
            <header>
                <NavLink to={"/home"}><h1>PelisPedia</h1></NavLink>
                {
                    user &&
                    <>
                        <nav>
                            <ul>
                                <li>
                                    <Link className='link' to={"/home"}>Inicio</Link>
                                </li>
                                <li>
                                    <Link className='link' to={"/favorites"}>Favoritos</Link>
                                </li>
                            </ul>
                        </nav>
                        <div>
                            <span>{user.name} {user.last_name}</span>
                            <button className='btnSignOut' onClick={() => dispatch(sign_out())}>Cerrar sesión</button>
                        </div>
                    </>
                }
            </header>
        </>
    );
};

export default NavBar;