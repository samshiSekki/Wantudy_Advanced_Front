import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { CLIENT_ID } from './OAuth2RedirectHandler';

const KaKaoRedirectHandler = () => {
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const CLIENT_SECRET = "zTgOV0pOBpNaZSP6JuLR7OGQ0aM2pPdJ";

  // calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get("code");

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });

    try {
      // access token 가져오기
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );
      
      // Kakao Javascript SDK 초기화
      window.Kakao.init(CLIENT_ID);
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div>{code}</div>
  );
};

export default KaKaoRedirectHandler;