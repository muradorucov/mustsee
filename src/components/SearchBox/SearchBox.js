import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../store/actions/action';
import './SearchBox.css';


const SearchBox = () => {
    const [searchLine, setSearchLine] = useState('')
    const dispatch = useDispatch()
    
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        fetch(`https://www.omdbapi.com/?s=${searchLine}&apikey=278924d5`)
            .then(res => res.json())
            .then(apiData => {
                dispatch(getMovies(apiData?.Search))
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Search movie by title:
                    <input
                        type="text"
                        className="search-box__form-input"
                        placeholder="For example, Shawshank Redemption"
                        onChange={(e) => { setSearchLine(e.target.value) }}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchLine}
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBox
