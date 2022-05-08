import React from "react";

const OAuth2RedirectHandler = () => {

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");


  return <></>
};

export default OAuth2RedirectHandler;