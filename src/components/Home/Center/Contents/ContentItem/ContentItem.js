import React from 'react';
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import './ContentItem.scss'
import { Link } from 'react-router-dom';
const ContentItem = ({ data,  setCls ,newArr,cls,saveHandler,savedHandler }) => {
    
    return (
       <div>
           {
               data.map((elem)=>(
                   <li key={uuidv4()} className='content-item'   id={elem.id}>
                       <Link to={`/@/${elem.name}`} >
                       <div className='content-header'>
                           <img src={elem.avatar} alt={elem.name} />
                           <span className='content-name'>{elem.name} </span>
                           <span className='dot'></span>
                           <span className='time'>{elem.updated}</span>
                       </div>
                       <div className='content-main'>
                           <div className='content-inner'>
                               <h2 className='content-title'>{elem.title}</h2>
                               <p className='content-desc'>{elem.desc}</p>
                           </div>
                           <img className='content-img' src={elem.img} alt={elem.name} />
                       </div>
                       </Link>
                       <div className='content-footer'>
                        <div className='content-topics'>
                               <span className='content-top'>{elem.topic}</span>
                               <span>{elem.read} min read</span>
                        </div>
                        <div className='small-modal-box'>
                               <div className='content-btns'>
                                   <button className='content-btn-save'>
                                       {
                                           elem.isTrue ? <svg onClick={() => cls !== elem.id ? setCls(elem.id) : setCls('')} id={elem.id} width="24" height="24" viewBox="0 0 24 24" fill="none" class="wb"><path d="M7.5 3.75a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-14a2 2 0 0 0-2-2h-9z" fill="#000"></path></svg>:
                                               <svg onClick={() => cls !== elem.id ? setCls(elem.id) : setCls('')} id={elem.id}  width="24" height="24" viewBox="0 0 24 24" fill="none" class="tu"><path d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z" fill="#000"></path></svg>
                                           
                                       }
                                   </button>
                                   <button className='content-btn-settings'>
                                       <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
                                   </button>

                               </div>
                               <div className={`small-modal`} style={{display: cls == elem.id ? 'block': 'none'}} id={elem.id}>
                                   <ul className='sm-modal-list'>
                                    {
                                        newArr.map(item => (
                                            <li className=''>
                                                <input onChange={savedHandler} type="checkbox"  id={item.id} className={cls}/>
                                                <label htmlFor={item.id}>{item.name}</label>
                                            </li>
                                        ))
                                    }
                                    
                                   </ul>
                                   <div className='sm-modal-footer'>
                                       <p className='sm-modal-link' onClick={saveHandler} >Create new list</p>
                                   </div>
                               </div>
                        </div>
                       </div>
                   </li>
               ))
            }
       </div>
    );
}

export default ContentItem;
