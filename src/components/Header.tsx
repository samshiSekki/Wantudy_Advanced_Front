import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Header = (props: any)=>{
  return (
    <>
      {
        props.headerColor === 'white'
        ?(<WantudyHeader>
        <HeaderContentContainer backgroundColor='#FFFFFF'>
          <Logo src="img/header_assets/wantudy_logo.png"/>
          <MenuContainer>
            <Menu>
              <Link to='/studyList'>스터디 참여</Link>
              </Menu>
            <Menu>스터디 개설</Menu>
            <Menu>스터디 관리</Menu>
          </MenuContainer>
          <UserBtnContainer>
            <Menu>로그아웃</Menu>
            <BellIcon src="img/header_assets/bell_icon.png"/>
          </UserBtnContainer>
          <UserProfile/>
        </HeaderContentContainer>
      </WantudyHeader>)

        :(
          <WantudyHeader>
        <HeaderContentContainer>
          <Logo src="img/header_assets/wantudy_logo_white.png"/>
          <MenuContainer>
            <Menu style={{color: 'white'}}>
              <Link to='/studyList'>스터디 참여</Link>
            </Menu>
            <Menu style={{color: 'white'}}>스터디 개설</Menu>
            <Menu style={{color: 'white'}}>스터디 관리</Menu>
          </MenuContainer>
          <UserBtnContainer>
            <Menu style={{color: 'white'}}>로그아웃</Menu>
            <BellIcon src="img/header_assets/bell_icon.png"/>
          </UserBtnContainer>
          <UserProfile/>
        </HeaderContentContainer>
      </WantudyHeader>
        )
      }
    </>
  )
}

let WantudyHeader : any = styled.header`
  position: fixed;
  display: flex;
  justify-content : center;
  width: 100vw;
  height: 157px;

  opacity: 1;
  z-index: 99;
`;
const HeaderContentContainer = styled.div<{backgroundColor?: string}>`
  display: flex;
  width: 1240px;
  height: 100%;
  align-items: center;
  -webkit-box-align: center;
  background: ${props => props.backgroundColor};
`;
let Logo : any = styled.img`
  width: 369px;
  height: 98px;
`;
let MenuContainer : any = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 450px;
  height: 27px;
`;
let Menu : any = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #22272E;
`;
let UserBtnContainer : any = styled.div`
  margin-left: 158px;
  display: flex;
  width: 125px;
  height: 27px;
  justify-content: space-between;
`;
let BellIcon : any = styled.img`
  padding-top:4px;
  width: 23px;
  height: 23px;
`;
let UserProfile : any = styled.div`
  margin-left: 27px;
  width: 44px;
  height: 44px;
  border-radius: 44px;
  border: 3px solid #0077FFCC;
`;

export default Header