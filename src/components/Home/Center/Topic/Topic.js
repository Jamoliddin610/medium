import React from 'react';
import './Topic.scss'
import data from '../../../../data';
const Topic = ({setArr,arr}) => {
    const btnArr = ['All','Social Media','World','Language','Programming']
    const filterHandler = (e) => {
        if (e.target.id === "All") {
            setArr(data.map(item => {
                return item;
            }))
        } else if (e.target.id === "Social Media") {
            setArr(data.filter(item => {
                return item.topic === e.target.id;
            }))
        } else if (e.target.id === "World") {
            setArr(data.filter(item => {
                return item.topic === e.target.id;
            }))
        } else if (e.target.id === "Language") {
            setArr(data.filter(item => {
                return item.topic === e.target.id;
            }))
        } else if (e.target.id === "Programming") {
            setArr(data.filter(item => {
                return item.topic === e.target.id;
            }))
        }
    }
    return (
        <>
        <div className='topic-container'>
            <p className='topic-title'>your topics</p>
            {btnArr.map(i =>(
                <button className='topic-btn' onClick={filterHandler} id={i}>{i}</button>
            ))}
        </div>
        <div className='recom-container'>
           <div className='recom-inner'>
                    <p className='recom-title'>Following</p>
                    <p className='recom-title-active'>Recommended</p>
           </div>
        </div>
        </>
    );
}

export default Topic;
