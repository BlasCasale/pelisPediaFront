import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { sign_out } from '../../redux/actions';

const NavBar = () => {
    const user = useSelector((state) => state.user);

    console.log(user)

    const dispatch = useDispatch();

    return (
        <>
            {
                user &&
                <header>
                    <NavLink to={"/index"}><h1>PelisPedia</h1></NavLink>
                    <nav>
                        <ul>
                            <li>
                                <Link className='linkNav' to={"/index"}>Inicio</Link>
                            </li>
                            <li>
                                <Link className='linkNav' to={"/favorites"}>Favoritos</Link>
                            </li>
                        </ul>
                    </nav>
                    <div>
                        <span>{user.name} {user.last_name}</span>
                        <button onClick={() => dispatch(sign_out())}>Cerrar sesión</button>
                    </div>
                </header>
            }
        </>
    );
};

export default NavBar;