import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../store/actions/action';
import { Spinner } from '@chakra-ui/react'

import './SearchBox.css';


const SearchBox = () => {
    const [loading, setLoading] = useState(false)
    const [searchLine, setSearchLine] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=avengers&apikey=278924d5`)
            .then(res => res.json())
            .then(apiData => {
                dispatch(getMovies(apiData?.Search))
            })
    },[dispatch])

    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        setLoading(true)
        fetch(`https://www.omdbapi.com/?s=${searchLine}&apikey=278924d5`)
            .then(res => res.json())
            .then(apiData => {
                dispatch(getMovies(apiData?.Search))
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
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
                        onChange={(e) => setSearchLine(e.target.value)}
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

            <div className='loading'>
                {loading ? <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                /> : null}
            </div>
        </div>
    )
}

export default SearchBox
