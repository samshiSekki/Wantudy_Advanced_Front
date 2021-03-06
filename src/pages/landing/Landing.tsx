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
                                π<br/>ννμ΄μ§λ‘ μμ±λλ<br/> μ€ν°λ λ§€μΉ­, μν°λ.<br/> κ°μ€νκ³ , μ μ²­νκ³ , κ΄λ¦¬νμ!
                            </BannerMainText>
                            <BannerSubText>
                                μν°λκ° κΆκΈνμ κ°μ? μ§κΈ λ°λ‘ μμν΄λ³΄μΈμ!
                            </BannerSubText>
                            <BannerBtn>μ§κΈ λ°λ‘ μμνκΈ°</BannerBtn>
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
                                μνλ μ€ν°λλ₯Ό μ°Ύκ³  μΆλ€λ©΄?<br/>μν°λμ ν¨κ»<br/>μνλ μ€ν°λλ₯Ό μ°Ύμλ³΄μΈμ.
                            </BannerMainText>
                            <BannerSubText>
                                μνλ μ€ν°λμ μ°Έμ¬νκ³  μΆμΌμ κ°μ?
                            </BannerSubText>
                            <BannerBtn>μ€ν°λ μ°Έμ¬νκΈ°</BannerBtn>
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
                                λ΄κ° μνλ μ€ν°λκ° μλ€λ©΄?<br/>
                                μ€ν°λμ λͺ¨μ§ κ²μλ¬Ό μμ±νκ³ <br/>
                                μ§μ  κ°μ€νμ!<br/>
                            </BannerMainText>
                            <BannerSubText>
                                μνλ μ€ν°λλ₯Ό μ°Ύμ§ λͺ»νμ¨λμ?
                            </BannerSubText>
                            <BannerBtn>μ€ν°λ κ°μ€νκΈ°</BannerBtn>
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
                                μνλ μ€ν°λλ₯Ό λ°κ²¬νλ€λ©΄?<br/>
                                μ€ν°λ μ μ²­μ μν<br/>
                                λνμ μ²­μλ₯Ό μ°μ  λ±λ‘ν΄μ£ΌμΈμ.
                            </BannerMainText>
                            <BannerSubText>
                                μνλ μ€ν°λλ₯Ό λ°κ²¬νμ¨λμ?
                            </BannerSubText>
                            <BannerBtn>μ€ν°λ μ μ²­νκΈ°</BannerBtn>
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
                        <div style={{fontWeight: '600', fontSize: '30px', marginTop: '29px'}}>κ°μ€νκ³ </div>
                    </Container1ContentBox>
                    <Container1ContentBox>
                        <img src='img/landing_assets/apply_icon.png' style={{width: '96px', height: '96px'}}/>
                        <div style={{fontWeight: '600', fontSize: '30px', marginTop: '29px'}}>μ μ²­νκ³ </div>
                    </Container1ContentBox>
                    <Container1ContentBox>
                        <img src='img/landing_assets/manage_icon.png' style={{width: '96px', height: '96px', transform: 'scaleX(-1)'}}/>
                        <div style={{fontWeight: '600', fontSize: '30px', marginTop: '29px'}}>κ΄λ¦¬νκ³ </div>
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
                        <div style={{fontWeight: '600', fontSize: '35px', color: '#497EF1'}}>κ°μ€</div>
                        <div style={{fontWeight: '600', fontSize: '35px', lineHeight: '53px', marginTop: '37px'}}>
                            μνλ μ€ν°λκ° μμΌμ κ°μ?<br/>
                            μνλ μ€ν°λλ₯Ό μ§μ  κ°μ€νμ¬<br/>
                            ν¨κ» ν  μ€ν°λμμ μ°Ύμλ³΄μΈμ!
                        </div>
                        <div style={{fontWeight: '300', fontSize: '20px', marginTop: '27px'}}>
                            λΉμ μ΄ μνλ μ€ν°λλ₯Ό μ§μ  κ°μ€ν΄λ³΄μΈμ.<br/>
                            μν°λμμλΌλ©΄ μ΄μ ZERO μ€ν°λμ κ±±μ ZERO!<br/>
                            λ±λ‘λ μ μ²­μλ₯Ό ν΅ν΄ μ΄μ κ°λ μ€ν°λμλ€κ³Ό ν¨κ»ν  μ μμ΅λλ€!
                        </div>
                    </div>
                </LandingContainerContent>
            </LandingContainer2>

            <LandingContainer1>
                <LandingContainerContent>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <div style={{fontWeight: '600', fontSize: '35px', color: '#497EF1'}}>μ μ²­</div>
                        <div style={{fontWeight: '600', fontSize: '35px', lineHeight: '53px', marginTop: '37px'}}>
                            μ€ν°λλ₯Ό νκ³  μΆμ λΉμ ..<br/>
                            νμ§λ§ μνλ μ€ν°λλ₯Ό μ°ΎκΈ° μ΄λ ΅λ€λ©΄?<br/>
                            μν°λλ‘ μ½κ² μ°Ύμλ³΄κ³  μ μ²­νμΈμ!
                        </div>
                        <div style={{fontWeight: '300', fontSize: '20px', marginTop: '27px'}}>
                            λ΄κ° μνλ μ€ν°λλ₯Ό ν κ³³μμ ν λ²μ!<br/>
                            μ°κ³  λ μ°λ μ§μμ, μν°λμμλ μμ μ μλ μΌ<br/>
                            μΉ λ΄ λ±λ‘ν μ μ²­μλ₯Ό ν΄λ¦­ ν λ²λ§μΌλ‘ μ μΆνμΈμ!<br/>
                            μν΄λ¦­ μ€ν°λ μ μ²­μ κ²½νν΄λ³΄μΈμ.
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
                        <div style={{fontWeight: '600', fontSize: '35px', color: '#497EF1'}}>κ΄λ¦¬</div>
                        <div style={{fontWeight: '600', fontSize: '35px', lineHeight: '53px', marginTop: '37px'}}>
                            All-In-One μ€ν°λ νλ«νΌ μν°λ!<br/>
                            μ€ν°λμ κ΄λ ¨λ λͺ¨λ  κ²μ<br/>
                            μ€ν°λλΉμ μν°λμ ν¨κ» κ΄λ¦¬νμΈμ
                        </div>
                        <div style={{fontWeight: '300', fontSize: '20px', marginTop: '27px'}}>
                            μ€ν°λ κ³Όμ  κΉλ¨Ήμ μΌ ZERO!<br/>
                            μ€ν°λμλ§ μ§μ€ν  μ μλλ‘ λΉμ μ μ€ν°λλΉμκ° λμ΄λλ¦΄κ²μ.<br/>
                            μ μ²­μ, μΌμ , κ³Όμ  λ±μ μ€ν°λμκ΄λ ¨λ λͺ¨λ  κ΄λ¦¬λ₯Ό<br/>
                            μν°λ ν κ³³μμ κ΄λ¦¬νμΈμ!
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