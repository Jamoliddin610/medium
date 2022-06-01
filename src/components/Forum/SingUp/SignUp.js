import {React, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import '../Sign.scss'
import { Link } from 'react-router-dom';

const SignUp = (props) => {
    const [username, setUsername] = useState(true)
    const [userEmpty, setUserEmpty] = useState(true)
    const [password, setPassword] = useState(true)
    const [PassEmpty, setPassEmpty] = useState(true)
    const [email, setEmail] = useState(true)
    const [EmailEmpty, setEmailEmpty] = useState(true)
    const [phone, setPhone] = useState(true)
    const [PhoneEmpty, setPhoneEmpty] = useState(true)
    let userName = ""
    let passWord = ""
    let emali = ""
    let phoen = ""

    const InputNameHandler = (e) => {
        props.setName(e.target.value);
        userName = e.target.value
        console.log(userName);
        if (userName === "") {
            setUserEmpty(false)
            setUsername(true);
        }
        if (userName.match(/[0-9]/) || userName.match(/[!@#&%*$^]/)) {
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
        if (passWord.match(/[a-z]/) || passWord.match(/[!@#&%*$^]/)) {
            setPassword(false);

        }
        else {
            setPassword(true);
        }
    }
    const InputEmailHandler = (e) => {
        emali = e.target.value
        if (emali === "") {
            setPassEmpty(false)
            setEmail(true);
        }
        if (emali.match(/[@]/) && emali.match(/[.]/)){
        setEmail(true)
    }
        else {
            setEmail(false);
        }
    }
    const InputPhoneHandler = (e) => {
        phoen = e.target.value
        if (phoen === "") {
            setPhoneEmpty(false)
            setPhone(true);
        }
        if (phoen.match(/[a-z]/) || phoen.match(/[!@#&%*$^]/)) {
            setPhone(false);

        }
        else {
            setPhone(true);
        }
    }
    
    let chek = (username && userEmpty && password && PassEmpty && email && EmailEmpty && phone && PhoneEmpty)
    console.log(chek)
    return (
        <div className='sign-in-container'>
            <FontAwesomeIcon size='5x' icon={faMedium} />
            <p className='sign-in-title title-sign-up'>Join Medium.</p>
            <form className='sign-in-form'>
                <input type="text" placeholder='First name' onChange={InputNameHandler} className={`${username ? '' : 'error'}`} />
                <input type="text" placeholder='Last name' onChange={InputNameHandler} className={`${username ? '' : 'error'}`}/>
                <input type="text" placeholder='Phone' onChange={InputPhoneHandler} className={`${phone ? '' : 'error'}`} />
                <input type="text" placeholder='Email' onChange={InputEmailHandler} className={`${email ? '' : 'error'}`} />
                <input type="password" placeholder='Password' onChange={InputPasswordHandler} className={`${password ? '' : 'error'}`}/>
                <Link to={'/home'}><button disabled={chek ? true : false} >Next Step</button></Link>
                <div className='sign-uper d-flex'>
                    <p>Already have an account?</p>
                    <Link to="/"><span>Sign in</span></Link>
                </div>

            </form>

        </div>
    );
}

export default SignUp;
