import React from 'react';
import Left from '../Left/Left';
import Modal from '../Modal/Modal';
import Right from '../Right/Right';
import data from '../../data';
import './List.scss'
import { Link } from 'react-router-dom';

const Lists = (props) => {

    const modalHandler = () =>{
        props.setClas('show')
    }
    
    return (
        <>
            <Modal clas={ props.clas} setClas={ props.setClas} arr={ props.arr} setArr={ props.setArr}/>
            <div className='list'>
                <Left />
                <div className='list-box'>
                    <div className='list-container'>
                        <div className='list-header'>
                            <div className='new-list-container'>
                                <h2 className='list-title'>
                                    Your lists
                                </h2>
                                <button className='new-list-btn' onClick={modalHandler} >New list</button>
                            </div>
                            <div className='sh-container'>
                                <p className='act'>Saved</p>
                                <p>Highlights</p>
                            </div>
                        </div>
                        <div className='list-main'>
                            <div className='create-list-adver'>
                                <div className='create-list-text'>
                                    <h3>Create a list to easily organize and share stories</h3>
                                    <button id='delete' onClick={modalHandler}>Start a list</button>
                                </div>
                                <div className='create-list-circle'>
                                    <div className='create-list-inner'>
                                        <svg width="283" height="174" viewBox="0 0 283 174" fill="none"><circle opacity="0.15" cx="141.5" cy="87.5" r="141.5" fill="#E8F3E8"></circle><circle cx="141.5" cy="87.5" r="29.5" fill="#fff"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M148.71 74.32a.66.66 0 0 1 1.31.07v3.28h3.28a.66.66 0 1 1 0 1.3h-3.28v3.29a.66.66 0 1 1-1.3 0v-3.28h-3.29a.66.66 0 0 1 0-1.31h3.28v-3.28-.07zm-13.77 4c-.72 0-1.3.59-1.3 1.31v17.68l7.46-5.74a.66.66 0 0 1 .8 0l7.47 5.74V87.5a.66.66 0 1 1 1.3 0v11.14a.66.66 0 0 1-1.05.52l-8.12-6.24-8.12 6.24a.65.65 0 0 1-1.06-.52v-19a2.62 2.62 0 0 1 2.62-2.63h5.25a.66.66 0 0 1 0 1.31h-5.25z" fill="#0F730C"></path></svg>
                                    </div>
                                </div>
                                <div className='create-list-delete'>
                                    <svg width="19" height="19" viewBox="0 0 19 19" class="arb"><path d="M13.8 4.6L9.5 8.89 5.21 4.6l-.61.61 4.29 4.3-4.29 4.28.61.62 4.3-4.3 4.28 4.3.62-.62-4.3-4.29 4.3-4.29" fill-rule="evenodd"></path></svg>
                                </div>
                            </div>
                            {props.arr.map(item => (
                                <div className='categories' id={item.id}>
                                    <Link to={`/saved/${item.id}`}>
                                    <div className='category-inner'>
                                        <h4 className='category-name'>
                                            {item.name}
                                        </h4>
                                        <button className='category-btn'>View list</button>

                                    </div>
                                    </Link>
                                    <div className='category-img-boxs'>
                                        <div className='category-img-first-box'>
                                            {data.map(el =>{
                                                if (el.categoryId == item.id) {
                                                    return(
                                                        <img src={el.img} alt=""  className='category-img'/>
                                                    )
                                                }
                                            })}
                                            <div className='categ-circle'></div>
                                        </div>
                                        <div className='category-img-second-box'>
                                            {data.map(el =>{
                                                if (el.categoryId == item.id) {
                                                    return(
                                                        <img src={el.img} alt=""  className='category-img-second'/>
                                                    )
                                                }
                                            })}
                                            <div className='categ-circle'></div>

                                        </div>
                                        <div className='category-img-third-box'>
                                            {data.map(el =>{
                                                if (el.categoryId == item.id) {
                                                    return(
                                                        <img src={el.img} alt=""  className='category-img-third'/>
                                                    )
                                                }
                                            })}
                                            <div className='categ-circle'></div>

                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
                <Right />
            </div>
        </>
        
    );
}

export default Lists;
