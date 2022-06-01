import React from 'react';
import ModalItem from '../ModalItem';
import './Backdrop.scss'
const Backdrop = ({clas,setClas,arr, setArr}) => {
    return (
    <div className={`backdrop ${clas}`}>
            <ModalItem setClas={setClas} arr={arr} setArr={setArr}/>
        </div>
    );
}

export default Backdrop;
