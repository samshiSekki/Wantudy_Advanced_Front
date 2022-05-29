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
        <LoginButton onClick={() => window.location.href=KAKAO_AUTH_URL}>
            <img src={kakaoIcon}/>Kakao
            </LoginButton>
        </>
    )
}

export default KakaoLogin;

const LoginButton = styled.button`
    width: 252px;
    height: 100px;
    background: #FFEB00;
    border-radius: 51px;

    font-weight: 500;
    font-size: 30px;
    line-height: 43px;

    color: #3C1E1E;

    display: flex;
    align-items: center;
    padding-left: 30px;
`;