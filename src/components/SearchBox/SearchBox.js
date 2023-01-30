import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../store/actions/action';
import { Spinner } from '@chakra-ui/react'

import './SearchBox.css';


const SearchBox = (props) => {
    const [loading, setLoading] = useState(false)
    const [searchLine, setSearchLine] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=avengers&apikey=278924d5`)
            .then(res => res.json())
            .then(apiData => {
                dispatch(getMovies(apiData?.Search))
            })
    }, [dispatch])

    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        setLoading(true)
        fetch(`https://www.omdbapi.com/?s=${searchLine}&apikey=278924d5`)
            .then(res => res.json())
            .then(apiData => {
                dispatch(getMovies(apiData?.Search))
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
                console.log(props);
                props.datadom.current.style.top = "-100vh"
            })
    }
    return (
        <>
            <form className="search-form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-label" id='search-input'>
                    Search movie by name:
                    <input
                        type="text"
                        id='search-input'
                        className="search_input"
                        placeholder="For example, Shawshank Redemption"
                        onChange={(e) => setSearchLine(e.target.value)} />
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
        </>
    )
}

export default SearchBox
