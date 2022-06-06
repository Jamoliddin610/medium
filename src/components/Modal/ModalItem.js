import React, { useState } from 'react';
import './ModalItem.scss'
const Modal = (props) => {
    const [num,setNUm]=useState(0)
    const [value,setValue] = useState('')
    const modalCloseHandler = () =>{
        props.setClas('')
    }
    const targetCategoryHandler = (e) =>{
        setNUm(e.target.value.length)
        setValue(e.target.value)
    }
    const createCategoryHandler = () =>{
        props.setArr([...props.arr,{
            name:value,
            id: props.arr.length + 1
        }])
        
        setValue('')
    }

    return (
            <div className='modal-categ'>
            <svg onClick={modalCloseHandler} class="dg" width="29" height="29"><path d="M20.13 8.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62" fill-rule="evenodd"></path></svg>
               <div className='modal-inner'>
                    <h2 className='modal-title'>Create new list</h2>
                <input onChange={targetCategoryHandler} value={value} maxLength='60' className='modal-input' type="text" placeholder='Give it a name' />
                    <div className='modal-input-count'> <span>{num}</span>/60</div>
                    <p className='add-desc'>Add a description</p>
                    <form>
                        <input type="checkbox" id='check' />
                        <label for='check' className="modal-check">Make it private</label>
                    </form>
               </div>
                    <div className='modal-btn'>
                <button className='modal-cancel' onClick={modalCloseHandler}>Cancel</button>
                        <button className='modal-create' onClick={createCategoryHandler}>Create</button>
                    </div>
           </div>
    );
}

export default Modal;
