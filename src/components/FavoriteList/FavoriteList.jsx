import React from 'react';
import { useDispatch } from 'react-redux';
import { delete_favorite } from '../../redux/actions';
import Favorite from '../Favorite/Favorite';

const FavoriteList = ({ favoriteArray, user }) => {

    const dispatch = useDispatch();

    return (
        <>
            {
                favoriteArray.length > 0 &&
                favoriteArray.map((movie) => {
                    return <Favorite key={movie.imdbID} dispatch={dispatch} delete_favorite={delete_favorite} UserId={user && user.id} {...movie} />
                })
            }
        </>
    )
}

export default FavoriteList;