import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get_favorite } from '../../redux/actions';
import { useRedirectHome } from '../../hooks/useRedirectHome';
import FavoriteList from '../FavoriteList/FavoriteList';

const FavoritesListContainer = () => {

    useRedirectHome();

    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);

    const favoriteArray = useSelector((state) => state.favoriteArray);

    const favorite = useSelector((state) => state.favorite);

    useEffect(() => {
        dispatch(get_favorite(user.id));
    }, []);

    useEffect(() => {
        dispatch(get_favorite(user.id));
    }, [favorite]);

    return (
        <section className='layout'>
            {
                favoriteArray.length > 0 ?
                <FavoriteList favoriteArray={favoriteArray} user={user && user} /> :
                <h2>No tiene favoritos</h2>
            }
        </section>
    )
}

export default FavoritesListContainer