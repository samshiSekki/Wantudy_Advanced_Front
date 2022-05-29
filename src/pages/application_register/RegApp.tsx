import React, {useState} from 'react'
import Header from '../../components/Header'
import styled from 'styled-components'

const RegApp = ()=>{
    const [appName, setAppName] = useState("");
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");
    const [age, setAge] = useState("20");

    const [belong, setBelong] = useState("");
    const [major, setMajor] = useState("");
    const [attend, setAttend] = useState("재학");
    const [reside, setReside] = useState("");
    const [record, setRecord] = useState("");
    
    const [currentStep, setCurrentStep] = useState(1);
  return (
    <>
        <div style={{height: '157px', boxShadow: '0px 0px 80px rgba(0, 0, 0, 0)'}}>
        <Header headerColor = {'white'}/>
        </div>
        <div style={{width: '100vw', background:'#F8F9FC', display: 'flex', justifyContent:'center'}}>
        <AppContainer>
            <AppTitle>대표 신청서</AppTitle>
            
                    <div style={{display: 'flex'}}>
                    <div style={{width: '50%', color: '#497EF1', fontWeight: '700'}}>
                        <div style={{display: 'flex'}}>
                        <span>step 1. 기본 정보 작성</span>
                        {
                            currentStep === 1
                            ? null
                            : <img src="img/regapp_assets/blue_check.png" style={{width: '23px', marginLeft: '10px'}}/>
                        }
                        </div>
                        <div style={{width: '99%', height: '7px', background: '#497EF1', borderRadius: '10px', marginTop: '14px'}}></div>
                    </div>
                    <div style={{width: '50%', color: '#969696', fontWeight: '700'}}>
                        step 2. 스터디 관련 작성
                        <div style={{width: '100%', height: '7px', background: 'rgba(150, 150, 150, 0.54)', borderRadius: '10px', marginTop: '14px'}}></div>
                    </div>
                    </div>
                    
            <div style={{background: '#F1F2F4', height: '55px', lineHeight:'55px',marginTop:'39px', marginBottom:'46px', borderRadius: '13px', paddingLeft: '20.5px', color: '#969696'}}>
                <img src='img/regapp_assets/expom_icon.png' style={{width: '16px', height: '16px', marginRight: '11px'}}/>
                스터디 신청을 위해 태표 신청서를 우선 등록해주세요
            </div>
            {
                    currentStep === 1
                ?(
            <div style={{background:'white', padding:'57px 69px 0px 69px', height: '574px'}}>
                
                <div>
                <ItemContainer>
                    <ItemTitle>신청서명</ItemTitle>
                    <InputType1 style={{width: '595px'}} onChange={(e: any)=>{setAppName(e.target.value)}}/>
                </ItemContainer>
                <AppHr/>
                <ItemContainer>
                    <ItemTitle>성명</ItemTitle>
                    <InputType1 style={{width: '351px'}} onChange={(e: any)=>{setName(e.target.value)}}/>
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
                    <div>
                        <span style={{color: '#969696'}}>만</span>
                        <InputType1 style={{width: '90px', marginLeft: '13px', marginRight: '5px'}} onChange={(e: any)=>{setAge(e.target.value)}}/>
                        <span style={{color: '#969696'}}>세</span>
                    </div>
                </ItemContainer>
                </div>
                </div>
                )
                
                :(
                <div style={{background:'white', padding:'57px 69px 0px 69px', height: '703px'}}>
                <div>
                <ItemContainer>
                    <ItemTitle>소속</ItemTitle>
                    <InputType1 style={{width: '467px'}} placeholder="학교 혹은 회사명을 입력하세요." onChange={(e:any)=>{setBelong(e.target.value)}}/>
                </ItemContainer>
                <AppHr/>
                <ItemContainer>
                    <ItemTitle>전공</ItemTitle>
                    <InputType1 style={{width: '395px'}} onChange={(e:any)=>{setMajor(e.target.value)}}/>
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
                    <InputType1 style={{width: '313px'}} placeholder="'구'단위까지 입력해주세요." onChange={(e:any)=>{setReside(e.target.value)}}/>
                </ItemContainer>
                <AppHr/>
                <ItemContainer>
                    <ItemTitle>이력</ItemTitle>
                    <InputType1 style={{width: '657px'}} placeholder="교내/대외활동,인턴,동아리,프로젝트 경험 등의 활동을 자유롭게 입력해주세요." onChange={(e:any)=>{setRecord(e.target.value)}}/>
                </ItemContainer>
                    </div>
                    </div>
                    )

                }
            {
                currentStep === 1
                ?(<NextBtn src="img/regapp_assets/next_btn.png" onClick={()=>{setCurrentStep(2)}}/>)
                :(<NextBtn src="img/regapp_assets/complete_btn.png"/>)
            }
        </AppContainer>
        </div>
    </>
  )
}

let AppContainer : any = styled.div`
    margin-top: 0px;
    font-family: 'Noto Sans KR', sans-serif;
    width: 62.4vw;
    height: auto;
    background: #F8F9FC;
    padding-top: 105px;
    padding-bottom: 97px;
`;
let AppTitle : any = styled.div`
    width: 1200px;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 41px;
    color: #181824;
    margin-bottom: 39px;
`;
let AppHr : any = styled.hr`
    border: 1px solid #D9D9D9;
    margin-top: 43px;
    margin-bottom: 43px;
`;
let ItemContainer: any = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #181824;
    align-items: center;
`;
let ItemTitle : any = styled.div`
    height: 26px;
    line-height: 26px;
`;
let InputType1 : any = styled.input`
    
    height: 55px;
    background: #FFFFFF;
    border-radius: 15px;
    border: 0px;
    padding-left: 20px;
    padding-right: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 34px;
    color: #181824;
    background: #F1F2F4;
`;

let GenderSelectBtnContainer : any = styled.div`
    display: flex;
    width: 180px;
    justify-content: space-between;
    height: 55px;
`;
let AttendSelectBtnContainer : any = styled.div`
    display: flex;
    width: 413px;
    justify-content: space-between;
    height: 55px;
`;
let UnselectedBtn : any = styled.div`
    width: auto;
    font-size: 16px;
    padding-left: 25px;
    padding-right: 25px;
    height: 55px;
    line-height: 55px;
    background: #F1F2F4;
    border-radius: 32px;
`;
let SelectedBtn : any = styled.div`
    width: auto;
    font-size: 16px;
    padding-left: 25px;
    padding-right: 25px;
    height: 55px;
    line-height: 55px;
    background: #497EF1;
    color: white;
    border-radius: 32px;
`;
let NextBtn : any = styled.img`
    width: 122px;
    height: 61px;
    float: right;
    margin-top: 47px;
`;

export default RegApp