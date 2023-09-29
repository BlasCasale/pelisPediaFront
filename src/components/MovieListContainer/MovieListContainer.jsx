import { useState, useEffect } from 'react';
import { useRedirectHome } from '../../hooks/useRedirectHome';
import { useSearchMovie } from '../../hooks/useSearchMovie';
import { useSelector, useDispatch } from 'react-redux';
import { get_favorite } from '../../redux/actions';
import MovieList from '../MovieList/MovieList';

const MovieListContainer = () => {
    useRedirectHome();

    const dispatch = useDispatch();

    const [input, setInput] = useState("");

    const user = useSelector((state) => state.user);

    const movies = useSelector((state) => state.movies);

    const favorite = useSelector((state) => state.favorite);

    useSearchMovie(input);

    useEffect(() => {
        dispatch(get_favorite(user.id));
    }, [favorite]);
    
    return (
        <main className='mainMovie'>
            <h3>ESCRIBAN ACA ABAJO</h3>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

            {
                movies != undefined ?
                    <MovieList movies={movies} user={user} /> :
                    <h2>No se ha encontrado esa pelicula</h2>
            }
        </main>
    );
};

export default MovieListContainer;