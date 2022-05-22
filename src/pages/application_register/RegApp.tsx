import React, {useState} from 'react'
import Header from '../../components/Header'
import styled from 'styled-components'

const RegApp = ()=>{
    const [gender, setGender] = useState("남자");
    const [attend, setAttend] = useState("재학");
  return (
    <>
        <Header headerColor = {'white'}/>
        <Banner>
            <BannerText>
                안녕하세요, OO님👋<br/>
                스터디 신청을 위한<br/>
                대표 신청서를 등록해주세요.<br/>
            </BannerText>
            <BannerImg src="img/regapp_assets/banner_Img.png"/>
        </Banner>
        <AppContainer>
            <div>
                <AppTitle>대표 신청서</AppTitle>
                <AppHr/>
                <ItemContainer>
                    <ItemTitle>신청서명</ItemTitle>
                    <InputType1/>
                </ItemContainer>
                <AppHr/>
                <ItemContainer>
                    <ItemTitle>성명</ItemTitle>
                    <InputType2/>
                </ItemContainer>
                <AppHr/>
                <ItemContainer>
                    <ItemTitle>성별</ItemTitle>
                    <GenderSelectBtnContainer>
                        {gender === "남자"?
                            <SelectedBtn>남자</SelectedBtn>
                            :<UnselectedBtn onClick={()=>{setGender("남자")}}>남자</UnselectedBtn>
                        }
                        {gender === "여자"?
                            <SelectedBtn>여자</SelectedBtn>
                            :<UnselectedBtn onClick={()=>{setGender("여자")}}>여자</UnselectedBtn>
                        }
                    </GenderSelectBtnContainer>
                </ItemContainer>
                <AppHr/>
                <ItemContainer>
                    <ItemTitle>나이</ItemTitle>
                    <InputType2/>
                </ItemContainer>
                <AppHr/>
                <ItemContainer>
                    <ItemTitle>소속</ItemTitle>
                    <InputType2/>
                </ItemContainer>
                <AppHr/>
                <ItemContainer>
                    <ItemTitle>전공</ItemTitle>
                    <InputType2/>
                </ItemContainer>
                <AppHr/>
                <ItemContainer>
                    <ItemTitle>재학 여부</ItemTitle>
                    <AttendSelectBtnContainer>
                        {attend === "재학"?
                            <SelectedBtn>재학</SelectedBtn>
                            :<UnselectedBtn onClick={()=>{setAttend("재학")}}>재학</UnselectedBtn>
                        }
                        {attend === "휴학"?
                            <SelectedBtn>휴학</SelectedBtn>
                            :<UnselectedBtn onClick={()=>{setAttend("휴학")}}>휴학</UnselectedBtn>
                        }
                        {attend === "졸업"?
                            <SelectedBtn>졸업</SelectedBtn>
                            :<UnselectedBtn onClick={()=>{setAttend("졸업")}}>졸업</UnselectedBtn>
                        }
                        {attend === "해당 없음"?
                            <SelectedBtn>해당 없음</SelectedBtn>
                            :<UnselectedBtn onClick={()=>{setAttend("해당 없음")}}>해당 없음</UnselectedBtn>
                        }
                    </AttendSelectBtnContainer>
                </ItemContainer>
                <AppHr/>
                <ItemContainer>
                    <ItemTitle>거주지</ItemTitle>
                    <InputType2/>
                </ItemContainer>
                <AppHr/>
                <ItemContainer>
                    <ItemTitle>이력</ItemTitle>
                    <InputType1/>
                </ItemContainer>
                <AppHr/>
                <NextBtn src="img/regapp_assets/next_btn.png"/>
            </div>
        </AppContainer>
    </>
  )
}

let Banner : any = styled.div`
    padding-top: 157px;
    display:flex;
    width: 100vw;
    height: 642px;
    background: #FFFFFF;
    box-shadow: 0px 6px 100px rgba(34, 39, 46, 0.05);
    justify-content : center;
`;
let BannerText : any = styled.div`
    width: 758px;
    height: 181px;
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 57px;
    color: #22272E;
    margin-top: 110px;
`;
let BannerImg : any = styled.img`
    width: 416px;
    height: 416px;
`;
let AppContainer : any = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    display: flex;
    width: 100vw;
    height: 2464px;
    background: #F8F9FC;
    padding-top: 215px;
    padding-bottom: 185px;
    justify-content : center;
`;
let AppTitle : any = styled.div`
    width: 1200px;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 41px;
    color: #181824;
`;
let AppHr : any = styled.hr`
    border: 1px solid #D0D0D0;
    margin-top: 54px;
    margin-bottom: 54px;
`;
let ItemContainer: any = styled.div`
    display: flex;
    width: 1200px;
    justify-content: space-between;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 81px;
    color: #181824;
`;
let ItemTitle : any = styled.div`
    height: 81px;
`;
let InputType1 : any = styled.input`
    width: 672px;
    height: 81px;
    background: #FFFFFF;
    border-radius: 25px;
    border: 0px;
    padding-left: 20px;
    padding-right: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 34px;
    color: #181824;
`;
let InputType2 : any = styled.input`
    width: 496px;
    height: 81px;
    background: #FFFFFF;
    border-radius: 25px;
    border: 0px;
    padding-left: 20px;
    padding-right: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 34px;
    color: #181824;   
`;
let GenderSelectBtnContainer : any = styled.div`
    display: flex;
    width: 302px;
    justify-content: space-between;
    height: 81px;
`;
let AttendSelectBtnContainer : any = styled.div`
    display: flex;
    width: 671px;
    justify-content: space-between;
    height: 81px;
`;
let UnselectedBtn : any = styled.div`
    width: auto;
    font-size: 23px;
    padding-left: 44px;
    padding-right: 44px;
    height: 81px;
    line-height: 81px;
    background: #FFFFFF;
    border-radius: 40.5px;
`;
let SelectedBtn : any = styled.div`
    width: auto;
    font-size: 23px;
    padding-left: 44px;
    padding-right: 44px;
    height: 81px;
    line-height: 81px;
    background: #497EF1;
    color: white;
    border-radius: 40.5px;
`;
let NextBtn : any = styled.img`
    width: 166px;
    height: 81px;
    float: right;
    margin-top: 24px;
`;

export default RegApp