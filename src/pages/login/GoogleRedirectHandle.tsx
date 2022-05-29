import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

const GoogleRedirectHandle = () => {
    const navigate = useNavigate();
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = parsedHash.get("access_token");
    

  const getToken = async () => {
    axios({
        method: "GET", // 해당 게시물에서는 back이 get으로 받았음
        url: `http://localhost:8080/oauth/callback/kakao?code=${accessToken}`, // 백엔드 코드 ??
      })
        .then((res) => {
          console.log(res); // 토큰이 넘어올 것임
  
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
    <div>{accessToken}</div>
  );
};

export default GoogleRedirectHandle;