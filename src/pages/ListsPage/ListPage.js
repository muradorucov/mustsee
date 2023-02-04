import React, { useEffect, useState } from 'react'
import './ListPage.css'
export const ListPage = () => {
    const [list,setList] = useState(null)

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
                        <li key={item.id}>{item.title}</li>
                    </>
                ))}
            </ul>

        </div>
    )
}
