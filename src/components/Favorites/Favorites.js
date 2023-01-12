import React, { useState } from 'react';
import './Favorites.css';

const Favorites = () => {

    const [favorites, setFavorites] = useState({
        title: 'Новый список',
        movies: [
            { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
        ]
    })
    return (
        <div className="favorites">
            <input value="Новый список" className="favorites__name" />
            <ul className="favorites__list">
                {favorites.movies.map((item) => {
                    return <li key={item.imdbID}>{item.title} ({item.year})</li>;
                })}
            </ul>
            <button type="button" className="favorites__save">Сохранить список</button>
        </div>
    )
}

export default Favorites
