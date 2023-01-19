import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeToList, saveList } from '../../store/actions/action';
import './Favorites.css';

const Favorites = () => {
    const [listName, setListName] = useState("");

    const { list } = useSelector(state => state)
    const dispatch = useDispatch()


    const removeList = (param) => {
        dispatch(removeToList(param))
    }

    const getSaveList = async () => {
        let myList = list.map(item => item.imdbID)
        const listObj = {
            title: listName,
            movies: myList
        }
        const response = await fetch('https://acb-api.algoritmika.org/api/movies/list/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(listObj),
        });
        const json = await response.json();
        console.log(json)

    }

    return (
        <div className="favorites">
            <input placeholder='New list' className="favorites__name" onChange={(e) => { setListName(e.target.value) }} />
            <ul className="favorites__list">
                {list?.map((item) => (<li key={item?.imdbID} className="list-item">
                    <Link to="#!">{item?.Title} ({item?.Year})</Link>
                    <button onClick={() => { removeList(item) }}>x</button></li>))}
            </ul>
            <button
                type="button"
                className="favorites__save"
                onClick={getSaveList}
                disabled={!listName}>Save list</button>
        </div>
    )
}

export default Favorites
