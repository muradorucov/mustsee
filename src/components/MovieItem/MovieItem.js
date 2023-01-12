import React from 'react';
import './MovieItem.css';


const MovieItem = (props) => {
    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={props?.Poster} alt={props?.Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{props?.Title}&nbsp;({props?.Year})</h3>
                <button type="button" className="movie-item__add-button">Добавить в список</button>
            </div>
        </article>
    )
}

export default MovieItem


