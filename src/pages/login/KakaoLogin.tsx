import React from 'react';
import styled from 'styled-components';
import kakaoIcon from '../../asset/login/icon-kakao.svg';
import { KAKAO_AUTH_URL } from './OAuth2RedirectHandler';

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
        <LoginButton onClick={() => window.location.href= KAKAO_AUTH_URL}/>
        </>
    )
}

export default KakaoLogin;

const LoginButton = styled.button`
    background-image: url(${kakaoIcon});
    background-repeat: no-repeat;
    width: 81px;
    height: 81px;
    border-radius: 50%;
    background-size: contain;
    border: none; 
`;