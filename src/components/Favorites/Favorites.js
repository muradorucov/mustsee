import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeToList } from '../../store/actions/action';
import './Favorites.css';

const Favorites = () => {
    const [listName, setListName] = useState("");
    const [btnStatus, setBtnStatus] = useState(false)
    const [data, setData] = useState();

    const { list } = useSelector(state => state)

    const dispatch = useDispatch()
    const removeList = (param) => {
        dispatch(removeToList(param))
    }


    const getSaveList = () => {
        let myMoviesID = list.map(item => item.imdbID)
        const listObj = {
            title: listName,
            movies: myMoviesID
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
        setBtnStatus(true)
    }

    return (
        <div className="favorites">
            <input
                placeholder='New list'
                className="favorites__name"
                onChange={(e) => { setListName(e.target.value) }}
            />
            <ul className="favorites__list">
                {list?.map((item) => (<li key={item?.imdbID} className="list-item">
                    <span>{item?.Title} ({item?.Year})</span>
                    <button
                        onClick={() => { removeList(item) }}
                        className="list-btn">x</button></li>))}
            </ul>
            {data ? <Link to={`list/${data.id}`} >Go to list : {data.title}</Link> :
                <button
                    type="button"
                    className="favorites__save"
                    onClick={getSaveList}
                    disabled={!listName || !list.length || btnStatus}>Save list</button>}
        </div>
    )
}

export default Favorites
