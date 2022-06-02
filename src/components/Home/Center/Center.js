import React, { useEffect, useState } from 'react'
import Topic from './Topic/Topic';
import './Center.scss'
import Contents from './Contents/Contents';
import data from '../../../data';

const Center = (props) => {
    let [arr, setArr] = useState([]);

    useEffect(() => {
        setArr(data)
    }, []);

    return (
        <div className='center'>
            <div className='center-conteiner'>
            <Topic arr={arr} setArr={setArr} />
                <Contents arr={arr} newArr={props.newArr} setCls={props.setCls} cls={props.cls} saveHandler={props.saveHandler} savedHandler={props.savedHandler} />
            </div>
        </div>
    );
}

export default Center;
