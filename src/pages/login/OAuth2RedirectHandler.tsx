import React from "react";

export const CLIENT_ID = "329cc76fd7b5786ceb9ce6687abaf15e";
export const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;