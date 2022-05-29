import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import RegApp from './pages/application_register/RegApp';
import Landing from './pages/landing/Landing';
import StudyList from './pages/studyList/StudyList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/regapp' element={<RegApp/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/studyList' element={<StudyList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
