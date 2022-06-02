import React, { useEffect, useState } from 'react'
import ContentItem from './ContentItem/ContentItem';
import data from '../../../../data';
import './Contents.scss'
const Contents = (props) => {
    return (
        <div className="contents">
            <ul className='content-list'>
                <ContentItem data={props.arr} newArr={props.newArr} setCls={props.setCls} cls={props.cls} saveHandler={props.saveHandler} savedHandler={props.savedHandler} />
            </ul>
        </div>
    );
}

export default Contents;
