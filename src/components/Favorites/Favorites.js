import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Alert, AlertIcon, Stack } from '@chakra-ui/react'

import { listIsEmpty, removeToList } from '../../store/actions/action';
import './Favorites.css';
import { useEffect } from 'react';

const Favorites = () => {
    const [listName, setListName] = useState("");
    const [saveList, setSaveList] = useState(false)
    const [local, setLocal] = useState([])
    const [data, setData] = useState();

    const { list } = useSelector(state => state)

    const dispatch = useDispatch()
    const removeList = (param) => {
        dispatch(removeToList(param))
    }


    const getSaveList = (e) => {
        e.preventDefault()
        const listObj = {
            title: listName,
            movies: list
        }

        fetch('https://63c190e499c0a15d28ed39de.mockapi.io/api/v1/movies/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(listObj),
        })
            .then(res => res.json())
            .then(apiData => {
                setData(apiData)
                setLocal([...local, apiData])
            })
            .finally(() => {
                dispatch(listIsEmpty())
                setListName("")
                setSaveList(true)
                setTimeout(() => {
                    setSaveList(false)
                }, 2000)
            })
    }

    useEffect(() => {
        const storedValue = JSON.parse(localStorage.getItem("mylist"));
        if (storedValue) {
            setLocal([...storedValue])
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("mylist", JSON.stringify(local));
    }, [local])


    return (
        <div className="favorites">
            <form onSubmit={getSaveList}>
                <input
                    placeholder='New list'
                    className="favorites__name"
                    value={listName}
                    onChange={(e) => { setListName(e.target.value) }}
                />
                <button
                    type="submit"
                    className="favorites__save"
                    disabled={!listName || !list.length}>Save list</button>
            </form>
            {data ? <Link to={`listdetail/${data.id}`} >
                <button className="favorites__save">Go to list : {data.title}</button>
            </Link> : null
            }

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
