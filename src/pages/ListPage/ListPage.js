import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ListPage.css';


const ListPage = () => {
    const [algoApiData, setAlgoApiData] = useState({})
    let { id } = useParams();
    useEffect(() => {
        fetch(`https://63c190e499c0a15d28ed39de.mockapi.io/api/v1/movies/${id}`)
            .then(res => res.json())
            .then(data => {
                setAlgoApiData(data)
                console.log(data);
            })
    }, [id])

    return (
        <div className="list-page">
            {algoApiData ? <h1 className="list-page__title">{algoApiData.title}</h1> :
                <h1 className="list-page__title">My list</h1>}

            <div className="row">

                {algoApiData.movies?.map((item) => (
                    <div className='list-movie-item' key={item.imdbID}>
                        {item.Poster === "N/A" ? <img src="https://media.comicbook.com/files/img/default-movie.png"
                            alt={item.Title} />
                            : <img src={item.Poster} alt={item.Title} />}
                        <a target={"_blank"} rel="noreferrer" href={`https://www.imdb.com/title/${item.imdbID}/`}>{item.Title
                        } ({item.Year})</a>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ListPage
