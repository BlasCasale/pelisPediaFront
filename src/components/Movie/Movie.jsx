import React from 'react'

const Movie = ({ Poster, Title, Type, Year, imdbID, style, create_favorite, delete_favorite, UserId }) => {
    const info = { UserId, imdbID };

    return (
        <div className='card'>
            <p>{Title}</p>
            <img src={Poster} alt={Title} />
            <p>{Type == "movie" ? "Película" : "Serie"}</p>
            <p>{Year}</p>
            <p>{imdbID}</p>
            <button onClick={style == true ? delete_favorite(info) : create_favorite(info)}>{style == true ? "Borrar" : "Me gusta"}</button>
        </div>
    )
}

export default Movie