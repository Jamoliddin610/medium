import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import NavBar from './Navbar/NavBar';
import './Left.scss'
import { Link } from 'react-router-dom';
const Left = ({firstWord}) => {
    return (
        <div className='header-left'>
            <Link to='/home'><FontAwesomeIcon color='black' size='2x' icon={faMedium} /></Link>
            <NavBar/>
            <div className='header-avatar'>
                <p className="header-name">{firstWord}</p>
            </div>
        </div>
    );
}

export default Left;
