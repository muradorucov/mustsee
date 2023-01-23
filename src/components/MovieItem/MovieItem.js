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
            {props?.Poster === "N/A" ?
                <img className="movie-item__poster"
                    src="https://media.comicbook.com/files/img/default-movie.png"
                    alt={props?.Title} />
                : <img className="movie-item__poster"
                    src={props?.Poster} alt={props?.Title} />
            }

            <div className="movie-item__info">
                <h3 className="movie-item__title">{props?.Title}&nbsp;({props?.Year})</h3>
                <button type="button" className="movie-item__add-button" onClick={addList}>Add to list</button>
            </div>
        </article>
    )
}

export default MovieItem


