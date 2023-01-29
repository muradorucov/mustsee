import React from 'react';
import { Search2Icon } from '@chakra-ui/icons';
import './Header.css';


const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">
                MustSee
                <div className='proggresBar'></div>
            </h1>
            <ul className='list'>
                <li>Movies</li>
                <li>My lists</li>
                <li>
                    <Search2Icon />
                </li>
            </ul>
        </header>
    )
}

export default Header