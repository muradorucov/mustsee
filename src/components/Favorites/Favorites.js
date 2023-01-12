import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Favorites.css';

const Favorites = () => {
    const { list } = useSelector(state => state)

    return (
        <div className="favorites">
            <input defaultValue="Новый список" className="favorites__name" />
            <ul className="favorites__list">
                {list?.map((item) => (<li key={item?.imdbID} className="list-item">
                    <Link to="#!">{item?.Title} ({item?.Year})</Link>
                    <button>x</button></li>))}
            </ul>
            <button type="button" className="favorites__save">Сохранить список</button>
        </div>
    )
}

export default Favorites
