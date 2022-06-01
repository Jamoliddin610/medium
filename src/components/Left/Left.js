import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import NavBar from './Navbar/NavBar';
import './Left.scss'
const Left = ({firstWord}) => {
    return (
        <div className='header-left'>
            <FontAwesomeIcon size='2x' icon={faMedium} />
            <NavBar/>
            <div className='header-avatar'>
                <p className="header-name">{firstWord}</p>
            </div>
        </div>
    );
}

export default Left;
