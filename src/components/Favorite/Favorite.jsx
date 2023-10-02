import React from 'react';
import BtnDelete from '../BtnDelete/BtnDelete';

const Favorite = ({ Title, Year, Type, Poster, UserId, imdbID, dispatch, delete_favorite }) => {
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
                <button className={"cardBtn"} onClick={() => dispatch(delete_favorite(info))}><BtnDelete /></button>
            </div>
        </div>
    )
}

export default Favorite