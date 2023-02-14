import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/navbar'
import PublicIcon from '@mui/icons-material/Public';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import StarsIcon from '@mui/icons-material/Stars';
import "./style.css"

export function MovieDetail() {
    const [movieDeatil, setMovieDeatil] = useState({})
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=${id}&apikey=278924d5`)
            .then(res => res.json())
            .then(apiData => {
                console.log(apiData);
                setMovieDeatil(apiData)
            })
    }, [id])
    return (
        <>
            <Header />

            {Object.keys(movieDeatil).length ? <div className='movie-item-detail'>
                {movieDeatil?.Poster === 'N/A' ? <img src="https://media.comicbook.com/files/img/default-movie.png"
                    alt={movieDeatil.Title} /> : <img src={movieDeatil?.Poster} alt={movieDeatil?.Title} />}
                <div className='movie-item-detail-vs'>
                    <h2>{movieDeatil?.Title}</h2>
                    <ul>
                        <li>
                            <StarsIcon />
                            <span>{movieDeatil?.imdbRating}</span>
                        </li>
                        <li>
                            <QueryBuilderIcon />
                            <span>{movieDeatil?.Runtime}</span>
                        </li>
                        <li>
                            <SentimentSatisfiedAltIcon />
                            <span>{movieDeatil?.Year}</span>
                        </li>
                        <li>
                            <FilterVintageIcon />
                            <span>{movieDeatil?.Genre}</span>
                        </li>
                        <li>
                            <PublicIcon />
                            <span>{movieDeatil?.Country}</span>
                        </li>
                    </ul>
                    <p className='movie-text'>{movieDeatil?.Plot}</p>
                    <div className='movie-detail-footer'>
                        <div>
                            <p className='hd'>Director</p>
                            <p>{movieDeatil?.Director}</p>
                        </div>
                        <div>
                            <p className='hd'>Actors</p>
                            <p>{movieDeatil?.Actors}</p>
                        </div>
                    </div>
                    <div className='movie-detail-btns'>
                        <button>+ MY List</button>
                    </div>
                </div>

            </div> : <span className='movie-item-detail'>Loading ...</span>}


        </>
    )
}
