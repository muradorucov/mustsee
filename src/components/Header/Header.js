import React, { useRef } from 'react';
import { CloseIcon, Search2Icon } from '@chakra-ui/icons';
import './Header.css';


const Header = () => {
    const search = useRef(true);

    const getSearchPanel = () => {
        search.current.style.top = "0"
    }

    const closeSearchForm = () => {
        search.current.style.top = "-100vh"
    }


    return (
        <header className="header">
            <h1 className="header__title">
                MustSee
                <div className='proggresBar'></div>
            </h1>
            <ul className='list'>
                <li>Movies</li>
                <li>My lists</li>
                <li onClick={getSearchPanel}>
                    <Search2Icon />
                </li>
            </ul>
            <div className='nav-search' ref={search}>
                <form className="search-form" >
                    <label className="search-label" id='search-input'>
                        Search movie by name:
                        <input
                            type="text"
                            id='search-input'
                            className="search_input"
                            placeholder="For example, Shawshank Redemption"
                        // onChange={(e) => setSearchLine(e.target.value)}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                    // disabled={!searchLine}
                    >
                        Search
                    </button>
                </form>
                <button className='close-search' onClick={closeSearchForm}><CloseIcon/></button>

            </div>
        </header>
    )
}

export default Header