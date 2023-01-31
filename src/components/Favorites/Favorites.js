import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Alert, AlertIcon, Stack } from '@chakra-ui/react'

import { listIsEmpty, removeToList } from '../../store/actions/action';
import './Favorites.css';

const Favorites = () => {
    let arr = []
    const [listName, setListName] = useState("");
    const [btnStatus, setBtnStatus] = useState(false)
    const [saveList, setSaveList] = useState(false)
    const [data, setData] = useState();
    const [items, setItems] = useState([]);

    const { list } = useSelector(state => state)

    const dispatch = useDispatch()
    const removeList = (param) => {
        dispatch(removeToList(param))
    }


    const getSaveList = () => {
        const listObj = {
            title: listName,
            movies: list
        }
        arr.push(listObj)
        console.log(arr);
        localStorage.getItem('items', JSON.stringify(arr));

        fetch('https://63c190e499c0a15d28ed39de.mockapi.io/api/v1/movies/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(listObj),
        })
            .then(res => res.json())
            .then(apiData => {
                setData(apiData)
                setItems([apiData])
            })
            .finally(() => {
                dispatch(listIsEmpty())
                setListName("")
                setSaveList(true)
                setTimeout(() => {
                    setSaveList(false)
                }, 2000)
            })
        setBtnStatus(true)
    }



    return (
        <div className="favorites">
            <input
                placeholder='New list'
                className="favorites__name"
                value={listName}
                onChange={(e) => { setListName(e.target.value) }}
            />
            {/* {data ? <Link to={`listdetail/${data.id}`} >
                <button className="favorites__save">Go to list : {data.title}</button>
            </Link> : null
            } */}
            <button
                type="button"
                className="favorites__save"
                onClick={getSaveList}
                disabled={!listName || !list.length || btnStatus}>Save list</button>
            <ul className="favorites__list">
                {list?.map((item) => (<li key={item?.imdbID} className="list-item">
                    <span>{item?.Title} ({item?.Year})</span>
                    <button
                        onClick={() => { removeList(item) }}
                        className="list-btn">x</button></li>))}
            </ul>

            {saveList ? <div className='alert'>
                <Stack>
                    <Alert status='success' variant='solid' bgColor="whatsapp">
                        <AlertIcon />
                        Added a list to the my lists !
                    </Alert>
                </Stack>
            </div> : null}

        </div>
    )
}

export default Favorites
