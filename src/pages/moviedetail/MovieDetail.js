import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/navbar'

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
        <>
            <Header />
        </>
    )
}
