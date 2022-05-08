import React, { useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import googleIcon from '../../asset/login/icon-google.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const clientId = "531568810937-o2m49go1ft95qcl2r0n7tlqi3pc597uh.apps.googleusercontent.com";
// 추후에 따로 빼야 함

export default function GoogleButton(){
    const navigate = useNavigate();
    
    const [userObj, setUserObj]=React.useState({
        email:"",
        name:""
      })

    const loginWithGoogle = () => {
        gapi.auth2.getAuthInstance().signIn();
        navigate('/');
    }

    const logoutFromGoogle = () => {
        gapi.auth2.getAuthInstance().signOut();
    }

    useEffect(()=>{
        gapi.load('auth2', function() {
            gapi.auth2.init({
                'client_id': clientId
            });
          });
    },[])

    return(
        <div>
        <LoginButton onClick={loginWithGoogle}/>
        {/* <button onClick={logoutFromGoogle}>
          logout from google
        </button> */}
        </div>
    )
}

const LoginButton = styled.button`
    background-image: url(${googleIcon});
    background-repeat: no-repeat;
    width: 81px;
    height: 81px;
    border-radius: 50%;
    background-size: contain;
    border: none; 
`;


