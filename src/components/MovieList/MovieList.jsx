import React from 'react';
import Movie from '../Movie/Movie';
import { useDispatch, useSelector } from 'react-redux';
import { get_favorite, create_favorite, delete_favorite } from '../../redux/actions';
import { useRedirectHome } from '../../hooks/useRedirectHome';

const MovieList = ({ movies }) => {

    useRedirectHome();

    const favoriteArray = useSelector((state) => state.favoriteArray);

    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

    dispatch(get_favorite(user.id));

    return (
        <>
            {
                movies.map((movie) => {
                    let style

                    const like = favoriteArray.find((movieLiked) => {
                        return movieLiked.imdbID === movie.imdbID
                    });

                    if (like) style = true;
                    else style = false;

                    return <Movie key={movie.imdbID} {...movie} style={style} create_favorite={create_favorite} delete_favorite={delete_favorite} UserId={user.id} />
                })
            }
        </>
    );
};

export default MovieList;