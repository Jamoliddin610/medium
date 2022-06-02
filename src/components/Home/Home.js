import React from 'react';
import Left from '../Left/Left';
import Modal from '../Modal/Modal';
import Right from '../Right/Right';
import Center from './Center/Center';
import './Home.scss'

const Home = ({ name,clas,setClas, cls, setCls, arr, setArr,saveHandler,savedHandler}) => {
    return (
        <div className='home'>
            <Left firstWord={name.at(0)} />
            <Center setCls={setCls} newArr={arr} cls={cls} saveHandler={saveHandler} savedHandler={savedHandler} />
            <Right/>
            <Modal clas={clas} setClas={setClas} arr={arr} setArr={setArr}/>
        </div>
    );
}

export default Home;
