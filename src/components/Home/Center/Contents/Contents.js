import React, { useEffect, useState } from 'react'
import ContentItem from './ContentItem/ContentItem';
import data from '../../../../data';
import './Contents.scss'
const Contents = (props) => {
    return (
        <div className="contents">
            <ul className='content-list'>
                <ContentItem data={props.arr} />
            </ul>
        </div>
    );
}

export default Contents;
