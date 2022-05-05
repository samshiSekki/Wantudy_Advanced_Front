import React from 'react';

//const {Kakao} = window;

const KakaoLogin = () => {

    const LoginKakao = () => {
        // Kakao.Auth.authorize({
        //     redirectUri: 'https://developers.kakao.com/tool/demo/loginForm/oauth',
        //     prompts: 'login'
        //   })
    }
    return (
        <>
        <button onClick={LoginKakao}></button>
        </>
    )
}

export default KakaoLogin;