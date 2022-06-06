import React from 'react';
import Left from '../Left/Left';
import Right from '../Right/Right';
import './Notifications.scss'
const Notifications = () => {
    return (
        <div className='notifa'>
            <Left/>
            <div className='notifa-box'>
                <div className='notifa-container'>
                    <div className='notifa-header'>
                        <h2 className='notifa-title'>Notifications</h2>
                        <div className='notifa-navbar'>
                            <p className='notifa-nav actv'>All</p>
                            <p className='notifa-nav'>Responses</p>
                        </div>
                    </div>
                    <div className='stats-box'>
                        <p className='stats-text'>You're all caught up.</p>
                        <p className='stats-link'>Your stats</p>
                    </div>
                </div>
            </div>
            <Right/>
        </div>
    );
}

export default Notifications;
