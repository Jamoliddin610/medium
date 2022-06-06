import 'boxicons'
import { useState,useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/Forum/SignIn/SignIn';
import SignUp from './components/Forum/SingUp/SignUp';
import ContentUser from './components/Home/Center/Contents/ContentUser/ContentUser';
import Home from './components/Home/Home';
import Lists from './components/Lists/Lists';
import Saved from './components/Lists/Saced/Saved';
import Newstory from './components/Newstory/Newstory';
import Notifications from './components/Notifications/Notifications';
import Stories from './components/Stories/Stories';
import dataobj from './data';



function App() {

  const [name,setName]=useState('Jamoliddin')
  const [arr,setArr]=useState([
        {
            name: 'Reading List',
            id: 1,
        },
    ])
    console.log(arr);
    const [clas,setClas] = useState('')    
  const saveHandler = () =>{
        setClas('show')
        
    }
    const [cls,setCls] = useState()
    const savedHandler = (e) =>{
        dataobj.map(el=>{
            if (el.id === e.target.className ) {
              if (el.isTrue == true) {
                el.categoryId = ''
              }else{
                el.categoryId = e.target.id 
              }
              console.log(el.id);
                return el.isTrue = !el.isTrue
            }
        })
        console.log(data);
      }
      const[mystory,setMystory]=useState([])    
      const[data,setData]=useState([])
      useEffect(() => {
        setData(dataobj)
      }, []);
  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<SignIn setName={setName}/>} />
            <Route path="signup" element={<SignUp setName={setName}/> } />
            <Route path="home" element={<Home data={data} setData={setData} name={name} clas={clas} setClas={setClas} cls={cls} setCls={setCls} arr={arr} setArr={setArr} savedHandler={savedHandler} saveHandler={saveHandler}/>} />
            <Route path="notifications" element={<Notifications/>} />
            <Route path="lists" element={<Lists name={name}  clas={clas} setClas={setClas} arr={arr} setArr={setArr}/>} />
            <Route path="stories" element={<Stories mystory={mystory}/>} />
            <Route path="new-story" element={<Newstory name={name} mystory={mystory} setMystory={setMystory} data={data} setData={setData}/>  } />
            <Route path ="@/:id" element={<ContentUser user={name} data={data} setData={setData}/>}/>
            <Route path="saved/:id" element={ <Saved name={name} newArr={arr} cls={cls} setCls={setCls} savedHandler={savedHandler} saveHandler={saveHandler}/>} />

        </Routes>
    </div>
  );
}

export default App;
