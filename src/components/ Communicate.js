import React from 'react';
import styled from 'styled-components';
import Logo from '../images/typo.png';
// import SlackLogo from '../images/slacklogo.png';
// import ZoomLogo from '../images/zoomlogo.png';
// import XdLogo from '../images/xdlogo.png';

const CommunicateBackgroundBlock = styled.div`
  height: 50vh;
  padding: 15vh 0;
  background: #f4f4f4; 
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;

const Say = styled.div`
  color: #000;
  font-weight: 300;
  font-size: 35px;
  text-align: center;
  margin-bottom: 5vh;
`;

const Explain = styled.div`
  margin-bottom: 3vh;
  text-align: center;
  width: 60vw;
  font-size: 16px;
  color: #797979;
  font-weight: 500;
`;

const LogoBlock = styled.div`
    width: 100%;
    height: 100%;
    min-width: 250px;
    min-height: 250px;
    max-width: 1000px;
    background-image: url(${Logo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    cursor: pointer;`;

// const TableWrappr = styled.div`
//     background: #fff;
// `;

// const ContentWrapper = styled.div`
//     width: 60vw;
//     height: 10vh;
//     max-width: 600px;
//     min-width: 330px;
//     max-height: 74px;
//     min-height: 41px;
//     display: flex;
//     margin: 0;
// `;

// const Content = styled.div`
//     width: 20vw;
//     height: 10vh;
//     max-width: 200px;
//     min-width: 110px;
//     max-height: 74px;
//     min-height: 41px;
//     border: 1px solid #eee;
//     margin: 0;
//     display: flex;
//     justify-content:center;
//     align-items: center;
//     font-weight: 600;
// `;

// const SlackImg = styled.div`
//     width: 20vw;
//     height: 40vh;
//     max-width: 80px;
//     min-width: 30px;
//     max-height: 35px;
//     min-height: 21px;
//     background-image: url(${SlackLogo});
//     background-size: contain;
//     background-repeat: no-repeat;
//     background-position: center; 
//     cursor: pointer;
// `;

// const ZoomImg = styled(SlackImg)`
//     background-image: url(${ZoomLogo});
// `;

// const XdImg = styled(SlackImg)`
//     background-image: url(${XdLogo});
// `;

const Communicate = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" >
            <CommunicateBackgroundBlock>
                <Say>??????????????? <br/> ????????????</Say>
                <Explain>
                    ????????? ?????? ?????? ?????? ?????? ??????????????? ????????? ?????? ????????????.<br/>
                    ????????????????????? ?????? ????????? ????????? ??? ????????? ????????? ??? ?????????<br/>
                     ????????????????????? ?????? ????????? ???????????? ????????????.<br/>
                </Explain>
                <Explain>
                    ????????? ????????? ?????? ?????? ???????????? ???????????? ???????????? ???????????????.
                </Explain>
                <LogoBlock/>
                {/* <TableWrappr>
                    <ContentWrapper>
                        <Content><SlackImg></SlackImg></Content>
                        <Content><ZoomImg></ZoomImg></Content>
                        <Content><XdImg></XdImg></Content>
                    </ContentWrapper>
                    <ContentWrapper>
                        <Content>...</Content>
                        <Content>...</Content>
                        <Content>...</Content>
                    </ContentWrapper>
                </TableWrappr> */}
            </CommunicateBackgroundBlock>
        </div>
    );
}

export default Communicate;