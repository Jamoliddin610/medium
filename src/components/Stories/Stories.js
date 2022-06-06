import React from 'react';
import { Link } from 'react-router-dom';
import Left from '../Left/Left';
import Right from '../Right/Right';
import './Stories.scss'

const Stories = ({ mystory}) => {
    console.log(mystory);
    return (
        <div className='story'>
            <Left/>
            <div className='story-box'>
                <div className='story-container'>
                    <div className='story-header'>
                        <h2 className='story-title'>Your stories</h2>
                        <div className='story-btns'>
                            <Link to="/new-story"><button className='write-story'>Write a story</button></Link>
                            <button className='import-story'>Import a story</button>
                        </div>
                    </div>
                    <div className='story-navbar '>
                        <div className='story-nav actv'>Drafts 3</div>
                        <div className='story-nav'>Published</div>
                        <div className='story-nav'>Responses</div>
                    </div>
                <div className='story-main'>
                    {
                        mystory.map(item=>(
                            <div className='story-content'>
                                <h3 className='story-content-title'>{item.title}</h3>
                                <p className='story-content-text'>{item.text}</p>
                                <p className="story-content-time">Created about 1 min ago <svg width="21" height="21" viewBox="0 0 21 21" class="la"><path d="M4 7.33L10.03 14l.5.55.5-.55 5.96-6.6-.98-.9-5.98 6.6h1L4.98 6.45z" fill-rule="evenodd"></path></svg></p>
                            </div>
                        ))
                    }
                </div>
                </div>
            </div>  
            <Right/>
        </div>
    );
}

export default Stories;
