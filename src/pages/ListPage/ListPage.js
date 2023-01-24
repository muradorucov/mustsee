import React, { useEffect } from 'react';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './ListPage.css';


const ListPage = () => {
    const [algoApiData, setAlgoApiData] = useState({})
    const [movie, setMovie] = useState([])
    const [status, setStatus] = useState(false)
    // const { list } = useSelector(state => state)
    let { id } = useParams();
    useEffect(() => {
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
            .then(res => res.json())
            .then(data => {
                setAlgoApiData(data)
            })
    }, [id])

    let arr = []

    useEffect(() => {
        if (algoApiData) {
            Promise.all(algoApiData?.movies?.map((item) => fetch(`https://www.omdbapi.com/?i=${item}&apikey=278924d5`)))
                .then(products => {
                    products.forEach(element => {
                        element.json().then(data => {
                            if (data) {
                                console.log(data)
                                arr.push(data)
                                setMovie(arr)

                                console.log(movie)
                                setStatus(true)
                            } else {
                                console.log("data hele gelmeyib")
                            }

                        })
                    })
                })
                .catch((error) => console.log(error));
        }
    }, [algoApiData])


    return (
        <div className="list-page">
            {algoApiData ? <h1 className="list-page__title">{algoApiData.title}</h1> :
                <h1 className="list-page__title">My list</h1>}
            {status ? <div className="row">
                {movie?.map((item) => (
                    <div className='list-movie-item' key={item.imdbID}>
                        {item.Poster === "N/A" ? <img src="https://media.comicbook.com/files/img/default-movie.png"
                            alt={item.Title} />
                            : <img src={item.Poster} alt={item.Title} />}
                        <a target={"_blank"} rel="noreferrer" href={`https://www.imdb.com/title/${item.imdbID}/`}>{item.Title
                        } ({item.Year})</a>
                    </div>
                ))}

            </div> : <span>loading ...</span>}


        </div>
    )
}

export default ListPage

