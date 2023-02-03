import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=${id}&apikey=278924d5`)
            .then(res => res.json())
            .then(apiData => {
                console.log(apiData);
            })
    }, [id])
    return (
        <div>MovieDetail</div>
    )
}
