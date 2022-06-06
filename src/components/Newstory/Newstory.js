import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import { Link } from 'react-router-dom';
import './Newstory.scss'
const Newstory = ({name ,mystory,setMystory,data,setData}) => {
    const [lenth,setLenth] = useState([])
    const [nth, setNth] = useState(0)
    const divRef = useRef(null)
    const textRef = useRef(null)
    const titleRef = useRef(null)
    const [num, setNum] = useState(1)
    const [num2, setNum2] = useState(0)
    const [num3, setNum3] = useState(0)
    const [tru, setTru] = useState(false)

    const titleHandler = (e) => {
        if (e.keyCode == 13) {
            textRef.current.focus()
            setNum(num + 1)
            setNum2(num2 + 1)
            setNum3(num2 * 30)
            divRef.current.style = `transform:translateY(${num * 50}px)`
        }
        if (titleRef.current.value.length > 0 || textRef.current.value > 0) {
            setTru(true)
        } else {
            setTru(false)
        }
    }
    const textHolder = (e) =>{
        setLenth(e.target.value.split('\n'))
        setNth(lenth[lenth.length - 1].length)
        if (e.keyCode === 13) {
            setNum(num + 1)
            setNum2(num2 + 1)
            setNum3(num2 * 30)
            divRef.current.style = `transform:translateY(${num * 50}px)`
            console.log(divRef.current);
        }
        if (e.keyCode === 8) {
            if (nth === 1 ) {
                setNum(num - 1)
                if (num3 !== 0) {
                    setNum3(num3 - 30)
                } else {
                    setNum3(0)
                }
                divRef.current.style = `transform:translateY(${num3}px)`
            } 
        }
        if(e.target.value.length === 0){
            if (e.keyCode === 8) {
                titleRef.current.focus()
            }
        }
        if (titleRef.current.value.length > 0 || textRef.current.value > 0) {
            setTru(true)
        }else{
            setTru(false)
        }
    }
    
    const saveMystory = () =>{
        setMystory([...mystory,{
            title: titleRef.current.value,
            text:textRef.current.value
        }])
        setData([...data,{
            id: uuidv4(),
            avatar: 'https://icon-library.com/images/avatar-icon/avatar-icon-2.jpg',
            title: titleRef.current.value,
            name: name,
            topic: 'Programming',
            updated: 'June 4',
            isTrue: false,
            categoryId: '',
            read: '2',
            img: 'https://play-lh.googleusercontent.com/hB9t3Z-mi284_49HA3nAuhO-W5Cyhje7r2P9McdgORoVCd-0SV54c12NMQWLHnqALw',
            desc: textRef.current.value,
            text: `${name}, read more from Najmiddinov Jamoliddin — and everyone else on Medium.
You’ve read all your free member- only stories, become a member to get unlimited access.Your membership fee supports the voices you want to hear more from.`,
            post:{
                liked: 1,
            }
        }])
    }
    console.log(nth);
    return (
        <div className='new-story'>
            <div className='new-story-box'>
                <div className='new-story-container'>
                    <div className='new-story-header'>
                        <div className='header-about'>
                            <Link to='/home'>
                                <svg class="svgIcon-use" height="25" viewBox="0 0 1043.63 592.71"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36"></path><path d="M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279"></path><path d="M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path></g></g></svg>
                            </Link>
                        <p className='header-name'>
                            Draft in {name}
                        </p>
                        <span className='header-sav'>Saved</span>
                        </div>
                        <div className='header-tech'>
                            <Link to='/home' onClick={saveMystory}>
                                <button className={`header-publish ${tru ? '' : 'opasity'}` } disabled={tru ? false: true }>Publish</button>
                            </Link>
                            <svg class="svgIcon-use" width="25" height="25"><path d="M5 12.5c0 .552.195 1.023.586 1.414.39.39.862.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414A1.927 1.927 0 007 10.5c-.552 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.617 0c0 .552.196 1.023.586 1.414.391.39.863.586 1.414.586.552 0 1.023-.195 1.414-.586.39-.39.586-.862.586-1.414 0-.552-.195-1.023-.586-1.414a1.927 1.927 0 00-1.414-.586c-.551 0-1.023.195-1.414.586-.39.39-.586.862-.586 1.414zm5.6 0c0 .552.195 1.023.586 1.414.39.39.868.586 1.432.586.551 0 1.023-.195 1.413-.586.391-.39.587-.862.587-1.414 0-.552-.196-1.023-.587-1.414a1.927 1.927 0 00-1.413-.586c-.565 0-1.042.195-1.432.586-.39.39-.586.862-.587 1.414z" fill-rule="evenodd"></path></svg>
                            <svg class="svgIcon-use" width="25" height="25" viewBox="-293 409 25 25"><path d="M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 00-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 001 1h3.49a3.079 3.079 0 003.01 2.45 3.08 3.08 0 003.01-2.45h3.49a1 1 0 001-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 01-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 014.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z"></path></svg>
                            <div className='header-av'>
                                <p className='header-avp'>{name.at(0)}</p>
                            </div>
                        </div>

                    </div>
                    <div className='new-story-main'>
                        <div className='new-story-ball' ref={divRef}>
                            <svg class="svgIcon-use" width="25" height="25"><path d="M20 12h-7V5h-1v7H5v1h7v7h1v-7h7" fill-rule="evenodd"></path></svg>
                        </div>
                       <div className='new-story-inputs'>
                            <input type="text" ref={titleRef} placeholder="Title" onKeyUp={titleHandler} />
                            <textarea ref={textRef} placeholder='Tell your story…' onKeyUp={textHolder} cols="100" rows="30"></textarea>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newstory;
