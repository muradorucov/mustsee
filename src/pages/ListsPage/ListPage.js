import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './ListPage.css'
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
            <div>ListPage</div>

            <ul>
                {list?.map(item => (
                    <>
                        <Link to={`/listdetail/${item.id}`}><li key={item.id}>{item.title}</li></Link>
                    </>
                ))}
            </ul>

        </div>
    )
}
