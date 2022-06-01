import React from 'react';
import Left from '../Left/Left';
import Right from '../Right/Right';
import Center from './Center/Center';
import './Home.scss'

const Home = ({name}) => {
    return (
        <div className='home'>
            <Left firstWord={name.at(0)} />
            <Center/>
            <Right/>
        </div>
    );
}

export default Home;
