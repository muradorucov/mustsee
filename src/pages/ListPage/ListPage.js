import React from 'react';
import { useSelector } from 'react-redux';
import './ListPage.css';


const ListPage = () => {
    const { list } = useSelector(state => state)

    return (
        <div className="list-page">
            <h1 className="list-page__title">My list</h1>

            <div className="row">
                {list?.map((item) => (
                    <div className='list-movie-item' key={item.imdbID}>
                        {item.Poster==="N/A" ? <img src="https://media.comicbook.com/files/img/default-movie.png"
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

