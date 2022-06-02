import React from 'react';
import Left from '../../Left/Left';
import Right from '../../Right/Right';
import './Saved.scss'
import data from '../../../data';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from "uuid";
import { Link } from 'react-router-dom';



const Saved = ({ name, newArr, cls, setCls, savedHandler, saveHandler }) => {
    let location = useLocation();

    return (    
        <div className='saved'>
            <Left/>
            <div className='saved-box'>
                <div className='saved-container'>
                    <div className='saved-header'>
                        <div>
                            <div className='header-avatar'>
                                <p className="header-name">{name.at(0)}</p>
                            </div>
                            <div className='content-about'>
                                <p className='content-name'>
                                    {name}
                                </p>
                                <div className='content-times'>
                                    <span>Jun 1</span>
                                    <span className='dot'></span>
                                    <span>4 min read</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z" fill="#000"></path></svg>
                        </div>
                    </div>
                    <div className='saved-main'>
                        {
                            data.map(elem => {
                                if (elem.categoryId === location.pathname.split("/").at(-1)){
                                    return(
                                        <div key={uuidv4()} className='content-item' id={elem.id}>
                                            <div className='add-note'>
                                                <span>Add a note...</span>
                                            </div>
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
                                                    <img src={elem.img} alt={elem.name} />
                                                </div>
                                            </Link>
                                            <div className='content-footer'>
                                                <div className='content-topics'>
                                                    <span className='content-top'>{elem.topic}</span>
                                                    <span>{elem.read} min read</span>
                                                </div>
                                                <div className='small-modal-box'>
                                                    <div className='content-btns'>
                                                        <button className='content-btn-save' onClick={savedHandler}>
                                                            {
                                                                elem.isTrue ? <svg onClick={() => cls !== elem.id ? setCls(elem.id) : setCls('')} id={elem.id} width="24" height="24" viewBox="0 0 24 24" fill="none" class="wb"><path d="M7.5 3.75a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-14a2 2 0 0 0-2-2h-9z" fill="#000"></path></svg> :
                                                                    <svg onClick={() => cls !== elem.id ? setCls(elem.id) : setCls('')} id={elem.id} width="24" height="24" viewBox="0 0 24 24" fill="none" class="tu"><path d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z" fill="#000"></path></svg>

                                                            } 
                                                        </button>
                                                        <button className='content-btn-settings'>
                                                            <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
                                                        </button>

                                                    </div>
                                                    <div className={`small-modal`} id={elem.id} style={{ display: cls === elem.id ? 'block' : 'none' }}>
                                                        <ul className='sm-modal-list'>
                                                            {
                                                                newArr.map(item => (
                                                                    <li className=''>
                                                                        <input onChange={savedHandler}  type="checkbox" id={item.id} className={cls} />
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
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
            <Right/>
        </div>
    );
}

export default Saved;
