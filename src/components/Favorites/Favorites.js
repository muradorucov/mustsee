import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeToList, saveList } from '../../store/actions/action';
import './Favorites.css';

const Favorites = () => {
    const [listName, setListName] = useState("");
    const [data, setData] = useState();
    const [isFirstRender, setIsFirstRender] = useState();


    const { list } = useSelector(state => state)
    const dispatch = useDispatch()


    const removeList = (param) => {
        dispatch(removeToList(param))
    }


    useEffect(() => {
        setIsFirstRender(data)
        console.log(isFirstRender);
    }, [data])


    const getSaveList = () => {
        let myList = list.map(item => item.imdbID)
        const listObj = {
            title: listName,
            movies: myList
        }
        fetch('https://acb-api.algoritmika.org/api/movies/list/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(listObj),
        })
            .then(res => res.json())
            .then(apiData => {
                setData(apiData)
            })
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
