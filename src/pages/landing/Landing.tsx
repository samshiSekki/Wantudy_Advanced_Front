import React, {useState, useEffect} from 'react'
import Header from '../../components/Header'
import styled from 'styled-components'

const Landing = () => {
    const [currentCarousel, setCurrentCarousel] = useState(0);

    useEffect(() => {

    }, [currentCarousel])
    

    return(
        <>
            <Header headerColor={'black'}/>

            <CarouselContainer style={currentCarousel === 0
                ? {transform : 'translate(0)'} 
                : currentCarousel === 1
                    ?{transform : 'translate(-100vw)'}
                    : currentCarousel === 2
                        ?{transform : 'translate(-200vw)'}
                        :{transform : 'translate(-300vw)'}
                    }>
                <Carousel>
                    
                    <CarouselContent>
                        <div>
                            <BannerMainText>
                                👋<br/>한페이지로 완성되는<br/> 스터디 매칭, 원터디.<br/> 개설하고, 신청하고, 관리하자!
                            </BannerMainText>
                            <BannerSubText>
                                원터디가 궁금하신가요? 지금 바로 시작해보세요!
                            </BannerSubText>
                            <BannerBtn>지금 바로 시작하기</BannerBtn>
                            <CaroulselIndicator>
                                
                                <img src='img/landing_assets/carousel_arrow_left.png' onClick={()=>{setCurrentCarousel(3)}}/>
                                1/4
                                <img src='img/landing_assets/carousel_arrow_right.png' onClick={()=>{setCurrentCarousel(1)}}/>
                            </CaroulselIndicator>
                        </div>
                        <BannerImg src='img/landing_assets/carousel1.png' style={{width: '688px', height: '426.85px'}}/>
                    </CarouselContent>
                </Carousel>
                <Carousel>

                    <CarouselContent>
                        <div>
                            <BannerMainText>
                                원하는 스터디를 찾고 싶다면?<br/>원터디와 함께<br/>원하는 스터디를 찾아보세요.
                            </BannerMainText>
                            <BannerSubText>
                                원하는 스터디에 참여하고 싶으신가요?
                            </BannerSubText>
                            <BannerBtn>스터디 참여하기</BannerBtn>
                            <CaroulselIndicator>
                            <img src='img/landing_assets/carousel_arrow_left.png' onClick={()=>{setCurrentCarousel(0)}}/>
                            2/4
                            <img src='img/landing_assets/carousel_arrow_right.png' onClick={()=>{setCurrentCarousel(2)}}/>
                            </CaroulselIndicator>
                        </div>
                        <BannerImg src='img/landing_assets/carousel2.png' style={{width: '521px', height: '548px'}}/>
                    </CarouselContent>
                </Carousel>
                <Carousel>
                    <CarouselContent>
                        <div>
                            <BannerMainText>
                                내가 원하는 스터디가 없다면?<br/>
                                스터디원 모집 게시물 작성하고<br/>
                                직접 개설하자!<br/>
                            </BannerMainText>
                            <BannerSubText>
                                원하는 스터디를 찾지 못하셨나요?
                            </BannerSubText>
                            <BannerBtn>스터디 개설하기</BannerBtn>
                            <CaroulselIndicator>
                            <img src='img/landing_assets/carousel_arrow_left.png' onClick={()=>{setCurrentCarousel(1)}}/>
                            3/4
                            <img src='img/landing_assets/carousel_arrow_right.png' onClick={()=>{setCurrentCarousel(3)}}/>
                            </CaroulselIndicator>
                        </div>
                        <BannerImg src='img/landing_assets/carousel3.png' style={{width: '592px', height: '450.64px'}}/>
                    </CarouselContent>
                </Carousel>
                <Carousel>
                    <CarouselContent>
                        <div>
                            <BannerMainText>
                                원하는 스터디를 발견했다면?<br/>
                                스터디 신청을 위한<br/>
                                대표신청서를 우선 등록해주세요.
                            </BannerMainText>
                            <BannerSubText>
                                원하는 스터디를 발견하셨나요?
                            </BannerSubText>
                            <BannerBtn>스터디 신청하기</BannerBtn>
                            <CaroulselIndicator>
                                <img src='img/landing_assets/carousel_arrow_left.png' onClick={()=>{setCurrentCarousel(2)}}/>
                                4/4
                                <img src='img/landing_assets/carousel_arrow_right.png' onClick={()=>{setCurrentCarousel(0)}}/>
                            </CaroulselIndicator>
                        </div>
                        <BannerImg src='img/landing_assets/carousel4.png' style={{width: '515.38px', height: '502px'}}/>
                    </CarouselContent>
                </Carousel>
            </CarouselContainer>

            <LandingContainer1>
                <LandingContainerContent>
                    <Container1ContentBox>
                        <img src='img/landing_assets/open_icon.png' style={{width: '96px', height: '96px', transform: 'scaleX(-1)'}}/>
                        <div style={{fontWeight: '600', fontSize: '30px', marginTop: '29px'}}>개설하고</div>
                    </Container1ContentBox>
                    <Container1ContentBox>
                        <img src='img/landing_assets/apply_icon.png' style={{width: '96px', height: '96px'}}/>
                        <div style={{fontWeight: '600', fontSize: '30px', marginTop: '29px'}}>신청하고</div>
                    </Container1ContentBox>
                    <Container1ContentBox>
                        <img src='img/landing_assets/manage_icon.png' style={{width: '96px', height: '96px', transform: 'scaleX(-1)'}}/>
                        <div style={{fontWeight: '600', fontSize: '30px', marginTop: '29px'}}>관리하고</div>
                    </Container1ContentBox>
                </LandingContainerContent>
            </LandingContainer1>

            <LandingContainer2>
                <LandingContainerContent>
                    <div style={{width: '504px', height: '504px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{width: '504px', height: '504px', left: '296px', background: 'rgba(73, 126, 241, 0.16)', opacity: '0.5', filter: 'blur(160px)', position: 'absolute'}}/>
                        <img src="img/landing_assets/open_icon.png" style={{width: '308px', height: '308px', position: 'absolute'}}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <div style={{fontWeight: '600', fontSize: '35px', color: '#497EF1'}}>개설</div>
                        <div style={{fontWeight: '600', fontSize: '35px', lineHeight: '53px', marginTop: '37px'}}>
                            원하는 스터디가 없으신가요?<br/>
                            원하는 스터디를 직접 개설하여<br/>
                            함께 할 스터디원을 찾아보세요!
                        </div>
                        <div style={{fontWeight: '300', fontSize: '20px', marginTop: '27px'}}>
                            당신이 원하는 스터디를 직접 개설해보세요.<br/>
                            원터디에서라면 열정ZERO 스터디원 걱정ZERO!<br/>
                            등록된 신청서를 통해 열정가득 스터디원들과 함께할 수 있습니다!
                        </div>
                    </div>
                </LandingContainerContent>
            </LandingContainer2>

            <LandingContainer1>
                <LandingContainerContent>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <div style={{fontWeight: '600', fontSize: '35px', color: '#497EF1'}}>신청</div>
                        <div style={{fontWeight: '600', fontSize: '35px', lineHeight: '53px', marginTop: '37px'}}>
                            스터디를 하고 싶은 당신..<br/>
                            하지만 원하는 스터디를 찾기 어렵다면?<br/>
                            원터디로 쉽게 찾아보고 신청하세요!
                        </div>
                        <div style={{fontWeight: '300', fontSize: '20px', marginTop: '27px'}}>
                            내가 원하는 스터디를 한 곳에서 한 번에!<br/>
                            쓰고 또 쓰는 지원서, 원터디에서는 있을 수 없는 일<br/>
                            웹 내 등록한 신청서를 클릭 한 번만으로 제출하세요!<br/>
                            원클릭 스터디 신청을 경험해보세요.
                        </div>
                    </div>
                    <div style={{width: '504px', height: '504px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{width: '504px', height: '504px', left: '296px', background: 'rgba(73, 126, 241, 0.16)', opacity: '0.5', filter: 'blur(160px)', position: 'absolute'}}/>
                        <img src="img/landing_assets/apply_icon.png" style={{width: '308px', height: '308px', position: 'absolute'}}/>
                    </div>
                    
                </LandingContainerContent>
            </LandingContainer1>

            <LandingContainer2>
                <LandingContainerContent>
                    <div style={{width: '504px', height: '504px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{width: '504px', height: '504px', left: '296px', background: 'rgba(73, 126, 241, 0.16)', opacity: '0.5', filter: 'blur(160px)', position: 'absolute'}}/>
                        <img src="img/landing_assets/manage_icon.png" style={{width: '308px', height: '308px', position: 'absolute'}}/>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <div style={{fontWeight: '600', fontSize: '35px', color: '#497EF1'}}>관리</div>
                        <div style={{fontWeight: '600', fontSize: '35px', lineHeight: '53px', marginTop: '37px'}}>
                            All-In-One 스터디 플랫폼 원터디!<br/>
                            스터디와 관련된 모든 것은<br/>
                            스터디비서 원터디와 함께 관리하세요
                        </div>
                        <div style={{fontWeight: '300', fontSize: '20px', marginTop: '27px'}}>
                            스터디 과제 까먹을 일 ZERO!<br/>
                            스터디에만 집중할 수 있도록 당신의 스터디비서가 되어드릴게요.<br/>
                            신청서, 일정, 과제 등의 스터디와관련된 모든 관리를<br/>
                            원터디 한 곳에서 관리하세요!
                        </div>
                    </div>
                </LandingContainerContent>
            </LandingContainer2>
        </>
    )
}

let CarouselContainer : any = styled.div`
    transform: ;
    display:flex;
    width: 400vw;
    height: 1080px;
    background: #22272E;
    float: left;
    transition: transform 0.5s;
    overflow-x: hidden
    float:left;
`;

let Carousel : any = styled.div`
    width: 100vw;
    height: 1080px;
    display: flex;
    justify-content: center;
`;

let CarouselContent : any = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 304px;
    width: 1240px;
    height: 563px;
    align-items: center;
`;

let BannerMainText : any = styled.div`

    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 60px;

    color: #FFFFFF;
`;

let BannerSubText : any = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    color: white;
    margin-top: 64px;
`;

let BannerBtn : any = styled.div`
    width: 256px;
    height: 63px;
    background: #497EF1;
    border-radius: 0px 31px 31px 31px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 63px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 38px;
`;

let CaroulselIndicator : any = styled.div`
    display: flex;
    justify-content: space-between;

    width: 138px;
    height: 35px;

    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    color: white;
    line-height: 35px;
    float: left;
    margin-top: 70px;
`;

let BannerImg : any = styled.img`
    float: right;
`;

/**/
let LandingContainer1 : any = styled.div`
    width: 100vw;
    height: 788px;
    background: #F8F9FC;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
`;
let LandingContainerContent : any = styled.div`
    width: 1270px;
    display: flex;
    justify-content: space-between;
`;
let Container1ContentBox : any = styled.div`
    width: 302px;
    height: 297px;
    background: #FFFFFF;
    box-shadow: 0px 3px 60px rgba(0, 0, 0, 0.04);
    border-radius: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
/**/
let LandingContainer2 : any = styled.div`
    width: 100vw;
    height: 788px;
    background: white;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export default Landing