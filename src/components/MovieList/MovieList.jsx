import React from 'react';
import Movie from '../Movie/Movie';
import { useDispatch, useSelector } from 'react-redux';
import { create_favorite, delete_favorite } from '../../redux/actions';
import { useRedirectHome } from '../../hooks/useRedirectHome';

const MovieList = ({ movies, user }) => {

    useRedirectHome();

    const dispatch = useDispatch();

    const favoriteArray = useSelector((state) => state.favoriteArray);

    return (
        <main className='layout'>
            {
                movies.map((movie) => {
                    let style

                    const like = favoriteArray.find((movieLiked) => {
                        return movieLiked.imdbID === movie.imdbID
                    });

                    if (like) style = true;
                    else style = false;

                    return <Movie key={movie.imdbID} {...movie} style={style} dispatch={dispatch} create_favorite={create_favorite} delete_favorite={delete_favorite} UserId={user && user.id} />
                })
            }
        </main>
    );
};

export default MovieList;