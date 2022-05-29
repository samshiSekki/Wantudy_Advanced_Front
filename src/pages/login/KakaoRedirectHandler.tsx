import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

const KaKaoRedirectHandler = () => {
  // const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  // const CLIENT_SECRET = "zTgOV0pOBpNaZSP6JuLR7OGQ0aM2pPdJ";
  const navigate = useNavigate();

  // calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get("code");

  const getToken = async () => {
    axios({
      method: "GET", // 해당 게시물에서는 back이 get으로 받았음
      url: `http://3.35.208.142/oauth/callback/kakao?code=${code}`, // 백엔드 코드 ??
    })
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임

      // Kakao Javascript SDK 초기화
        window.Kakao.init('329cc76fd7b5786ceb9ce6687abaf15e');
        
        const ACCESS_TOKEN = res.data.accessToken;
        
        window.Kakao.Auth.setAccessToken(ACCESS_TOKEN);  
        
        navigate("/") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
        
        }).catch((err: any) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        navigate("/login") // 로그인 실패하면 로그인화면으로 돌려보냄
        })
  
      
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div>{code}</div>
  );
};

export default KaKaoRedirectHandler;