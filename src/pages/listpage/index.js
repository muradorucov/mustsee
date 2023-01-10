import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './style.css'

export const ListPage = () => {
    const [list, setList] = useState(null)

    useEffect(() => {
        const localValue = JSON.parse(localStorage.getItem("mylist"));
        if (localValue) {
            setList([...localValue])
        }
    }, []);
    return (
        <div className='listpage'>
            <h1 className="list-page__title">My Lists</h1>

            <ul className='movie-list'>
                {list?.map(item => (
                    <>
                        <li key={item.id}>
                            <Link to={`/listdetail/${item.id}`}>
                                <span>{item.title}</span>
                            </Link>
                            <button className="list-btn">x</button>
                        </li>
                    </>
                ))}
            </ul>

        </div>
    )
}
