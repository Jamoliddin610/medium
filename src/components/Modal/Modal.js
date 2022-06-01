import React from 'react';
import Backdrop from './Backdrop/Backdrop';

const Modal = (props) => {
    return (
        <div>
            <Backdrop clas={props.clas} setClas={props.setClas} arr={props.arr} setArr={props.setArr}/>
        </div>
    );
}

export default Modal;
