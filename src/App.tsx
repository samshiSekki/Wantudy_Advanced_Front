import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import RegApp from './pages/application_register/RegApp';
import KakaoRedirectHandler from './pages/login/KakaoRedirectHandler';
import { KAKAO_AUTH_URL } from './pages/login/OAuth2RedirectHandler';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/regapp' element={<RegApp/>}/>
        <Route path={KAKAO_AUTH_URL} element={<KakaoRedirectHandler/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
