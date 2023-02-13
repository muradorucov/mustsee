import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Header } from '../../components/navbar';
import './style.css'

export const ListPage = () => {
    const [localList, setLocalList] = useState([])

    useEffect(() => {
        const localValue = JSON.parse(localStorage.getItem("mylist"));
        if (localValue.length) {
            setLocalList([...localValue])
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("mylist", JSON.stringify(localList))
    }, [localList])


    return (
        <>
            <Header />
            <div className='listpage'>
                <h1 className="list-page__title">My Lists</h1>

                <ul className='movie-list'>
                    {localList.map(item => (
                        <li key={item.id}>
                            <Link to={`/listdetail/${item.id}`}>
                                <span>{item.title}</span>
                            </Link>
                            <button
                                className="list-btn"
                                onClick={() => setLocalList(localList.filter(localItem => (localItem.id !== item.id)))}
                            >x</button>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}
