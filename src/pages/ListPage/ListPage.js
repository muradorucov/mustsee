import React from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import './ListPage.css';


const ListPage = () => {
    // const [movieId, setMovieId] = useState([])
    // const [stateMovies, setstateMovies] = useState([])
    const { list } = useSelector(state => state)
    // let { id } = useParams();

    // useEffect(() => {
    //     fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setMovieId([...data.movies])
    //             console.log(movieId)
    //             // console.log(data.movies);
    //             // data.movies.forEach(element => {
    //             //     fetch(`https://www.omdbapi.com/?i=${element}&apikey=278924d5`)
    //             //     .then(res => res.json())
    //             //     .then(movie => {
    //             //         setstateMovies([...stateMovies, { ...movie }])
    //             //         console.log(movie);
    //             //         console.log(stateMovies);
    //             //     })
    //             // });

    //         })
    // },[])



    return (
        <div className="list-page">
            <h1 className="list-page__title">My list</h1>

            <div className="row">
                {list?.map((item) => (
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

