import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons' 
import '../Sign.scss'
import { Link } from 'react-router-dom';

const SignIn = (props) => {
    const [username,setUsername] = useState(true)
    const [userEmpty, setUserEmpty] = useState(true)
    const [password, setPassword] = useState(true)
    const [PassEmpty, setPassEmpty] = useState(true)
    let userName = ""
    let passWord = ""
    const InputNameHandler = (e) => {
        props.setName(e.target.value);
        userName=e.target.value
        console.log(userName);
        if (userName === "") {
            setUserEmpty(false)
            setUsername(true);
        }
        if ( userName.match(/[0-9]/) || userName.match(/[!@#&%*$^]/) ) {
            setUsername(false);

        } else {
            setUsername(true);
        }
    }
    const InputPasswordHandler = (e) => {
        passWord = e.target.value
        if (passWord === "") {
            setPassEmpty(false)
            setPassword(true);
        } 
        if (passWord.match(/[a-z]/) || passWord.match(/[!@#&%*$^]/) ) {
            setPassword(false);

        }
         else {
            setPassword(true);
        }
    }
    let chek = true
    const buttonHandler = () =>{
       chek=(username && password )
       
    }

    return (
        <div className='sign-in-container'>
            <FontAwesomeIcon size='10x' icon={faMedium}/>
            <p className='sign-in-title'>Welcome to Medium.</p>
            <form className='sign-in-form'>
                <input type="text" placeholder='Username' onChange={InputNameHandler} className={`${username ? '' : 'error'}`}/>
                <input type="password" placeholder='Password' onChange={InputPasswordHandler} className={`${password ? '' : 'error'}`} />
                <Link to={'home'}><button disabled={!chek}  onClick={buttonHandler}>Next Step</button></Link>
                <div className='sign-uper d-flex'>
                <p>No account?</p>
                <Link to="/signup"><span>Creat one</span></Link>
                </div>

            </form>

        </div>
    );
}

export default SignIn;
