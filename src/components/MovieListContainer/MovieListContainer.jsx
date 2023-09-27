import { useState } from 'react';
import { useRedirectHome } from '../../hooks/useRedirectHome';
import { useSearchMovie } from '../../hooks/useSearchMovie';
import { useSelector } from 'react-redux';
import MovieList from '../MovieList/MovieList';

const MovieListContainer = () => {
    const movies = useSelector((state) => state.movies);

    const [input, setInput] = useState("");

    useRedirectHome();

    useSearchMovie(input);

    return (
        <main className='mainMovie'>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

            {
                movies != undefined ?
                    <MovieList movies={movies} /> :
                    <h2>No se ha encontrado esa pelicula</h2>
            }
        </main>
    );
};

export default MovieListContainer;