import 'boxicons'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/Forum/SignIn/SignIn';
import SignUp from './components/Forum/SingUp/SignUp';
import ContentUser from './components/Home/Center/Contents/ContentUser/ContentUser';
import Home from './components/Home/Home';
import Lists from './components/Lists/Lists';
import Newstory from './components/Newstory/Newstory';
import Notifications from './components/Notifications/Notifications';
import Stories from './components/Stories/Stories';



function App() {
  const [name,setName]=useState('')
  
  return (
    <div className="App">
      <Routes>
            <Route path="/" element={<SignIn setName={setName}/>} />
            <Route path="signup" element={<SignUp setName={setName}/> } />
            <Route path="home" element={<Home name={name}/>} />
            <Route path="notifications" element={<Notifications/>} />
            <Route path="lists" element={<Lists/>} />
            <Route path="stories" element={<Stories/>} />
            <Route path="new-story" element={<Newstory/>} />
            <Route path ="@/:id" element={<ContentUser/>}/>

        </Routes>
    </div>
  );
}

export default App;
