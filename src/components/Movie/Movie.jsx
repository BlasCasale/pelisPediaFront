import React from 'react';
import BtnLike from '../BtnLike/BtnLike';
import BtnDelete from '../BtnDelete/BtnDelete';

const Movie = ({ Poster, Title, Type, Year, imdbID, style, create_favorite, delete_favorite, UserId, dispatch }) => {
    const info = { UserId, imdbID };

    return (
        <div className='card'>
            <img className='cardImg' src={Poster} alt={Title} />
            <div className='cardContainer'>
                <h3 className='h3Title'>{Title}</h3>
                <div className='cardContainerType'>
                    <p className='cardP'>Tipo:</p>
                    <p className='cardP'>{Type == "movie" ? "Película" : "Serie"}</p>
                </div>
                <p className='cardP'>Año: {Year}</p>
                <button className={"cardBtn"} onClick={style == true ? () => dispatch(delete_favorite(info)) : () => dispatch(create_favorite(info))}>{style == true ? <BtnDelete /> : <BtnLike />}</button>
            </div>
        </div>
    )
}

export default Movie