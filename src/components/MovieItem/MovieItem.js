import React from 'react';
import { useDispatch } from 'react-redux';
import { addToList } from '../../store/actions/action';
import './MovieItem.css';


const MovieItem = (props) => {
    const dispatch = useDispatch()

    const addList = () => {
        dispatch(addToList(props))
    }

    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={props?.Poster} alt={props?.Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{props?.Title}&nbsp;({props?.Year})</h3>
                <button type="button" className="movie-item__add-button" onClick={addList}>Добавить в список</button>
            </div>
        </article>
    )
}

export default MovieItem


