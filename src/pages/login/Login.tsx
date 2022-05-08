import React from 'react'
import GoogleButton from './GoogleLogin';
import styled from 'styled-components';
import logoIcon from '../../asset/icon-logo.svg';
import KakaoLogin from './KakaoLogin';

const Login = () => {
    return (
        <Container>
            <img src={logoIcon}/>
            <Input placeholder='아이디'/>
            <Input placeholder='비밀번호'/>
            <ContentBox>
                <span>원티드 계정이 없으신가요?</span>
                <span>회원가입</span>
                <span>아이디/비밀번호 찾기</span>
            </ContentBox>
            <Button>로그인</Button>
            <p>간편하게 SNS 로그인</p>
            <SocialLogin>
                <KakaoLogin/>
                <GoogleButton/>
            </SocialLogin>
        </Container>
    )

}

export default Login;


const Container = styled.div`
    width: 100vw;
    background-color: #22272E;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > img:first-child{
        margin-top: 180px;
        margin-bottom: 50px;
        margin-right: 30px;
    }

    & > p {
        margin-top: 52px;
        margin-bottom: 31px;
        color: #FFFFFF;
        font-weight: 600;
        font-size: 20px;
        line-height: 27px;
    }
    padding-bottom: 181px;
`;

const Input = styled.input`
    width: 646px;
    height: 81px;
    border-radius: 25px;
    color: #88898E;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;

    margin-bottom: 25px;
`;

const ContentBox = styled.div`
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;

    color: #FFFFFF;
    display: flex;

    margin-top: 6px;

    & > span:first-child {
        margin-right: 16px;
    }
    & > span:nth-child(2) {
        margin-right: 154px;
    }
    & > span:last-child {

        margin-left: auto;
    }
`;

const Button = styled.button`
    width: 645px;
    height: 81px;

    background: #497EF1;
    border-radius: 40.5px; 
    font-weight: 500;
    font-size: 23px;
    line-height: 31px;
    color: #FFFFFF;

    margin-top: 44px;

    border: none;
`;

const SocialLogin = styled.div`
    display: flex;
    gap: 20px;
`;