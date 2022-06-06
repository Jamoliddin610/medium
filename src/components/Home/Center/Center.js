import React from 'react'
import Topic from './Topic/Topic';
import './Center.scss'
import Contents from './Contents/Contents';

const Center = (props) => {

    return (
        <div className='center'>
            <div className='center-conteiner'>
            <Topic arr={props.data} setArr={props.setData} />
                <Contents arr={props.data} newArr={props.newArr} setCls={props.setCls} cls={props.cls} saveHandler={props.saveHandler} savedHandler={props.savedHandler} />
            </div>
        </div>
    );
}

export default Center;
