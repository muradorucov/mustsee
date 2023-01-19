import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeToList } from '../../store/actions/action';
import './Favorites.css';

const Favorites = () => {
    const { list } = useSelector(state => state)
    const dispatch = useDispatch()


    const removeList = (param) => {
        dispatch(removeToList(param))
    }

    return (
        <div className="favorites">
            <input defaultValue="New list" className="favorites__name" />
            <ul className="favorites__list">
                {list?.map((item) => (<li key={item?.imdbID} className="list-item">
                    <Link to="#!">{item?.Title} ({item?.Year})</Link>
                    <button onClick={() => { removeList(item) }}>x</button></li>))}
            </ul>
            <button type="button" className="favorites__save">Save list</button>
        </div>
    )
}

export default Favorites
