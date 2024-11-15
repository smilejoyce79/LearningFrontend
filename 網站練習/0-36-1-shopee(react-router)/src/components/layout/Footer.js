import React from "react";
import styled from "styled-components";
import Container from "../common/Container";
import {Link} from 'react-router-dom';
import CVSlogo from "../../images/logo_QRcode/cvslogo.png";
import QRcode from "../../images/logo_QRcode/QRcode.png";

const StyledFooter = styled.footer`
    background-color: #e8eaeb;
    padding: 40px 0px;
`;

const FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;  //使flex排版在RWD適應下 可自動換行
`;

const FooterColumn = styled.div`
    width: 33.33%;
    @media (min-width: 769px) {width:20%};
    margin-bottom: 16px;
    display: flex;
    flex-direction: column; //使flex排版以垂直排列
    a { 
        margin-bottom: 6px;
        text-decoration: none;
        color: rgba(0,0,0,0.54);
    }
`;

const FooterColumnTitle = styled.h4`
    font-weight: bold;
    margin-bottom: 12px;
`;

const Footer = () =>{
    return (
    <StyledFooter>
        <Container>
            <FlexBox>
                <FooterColumn>
                    <FooterColumnTitle>客服中心</FooterColumnTitle>
                    <Link to='#!'>幫助中心</Link>
                    <Link to='#!'>幫助中心</Link>
                    <Link to='#!'>幫助中心</Link>
                    <Link to='#!'>幫助中心</Link>
                    <Link to='#!'>幫助中心</Link>
                    <Link to='#!'>幫助中心</Link>
                </FooterColumn>
                <FooterColumn>
                    <FooterColumnTitle>關於蝦皮</FooterColumnTitle>
                    <Link to='#!'>幫助中心</Link>
                    <Link to='#!'>幫助中心</Link>
                    <Link to='#!'>幫助中心</Link>
                    <Link to='#!'>幫助中心</Link>
                </FooterColumn>
                <FooterColumn>
                    <FooterColumnTitle>物流合作</FooterColumnTitle>
                    <img src={CVSlogo} alt="cvslogo" width="80%" style={{marginBottom:8}}/>
                    <FooterColumnTitle>蝦皮24hr包裝減量標章</FooterColumnTitle>
                </FooterColumn>               
                <FooterColumn>
                    <FooterColumnTitle>關注我們</FooterColumnTitle>
                </FooterColumn>               
                <FooterColumn>
                    <FooterColumnTitle>下載蝦皮</FooterColumnTitle>
                    <FlexBox>
                        <div>
                            <img src={QRcode} alt="QRcode" width="80%"/>
                        </div>  
                        <div>
                            <div>
                                <img src="https://down-tw.img.susercontent.com/file/4e4f8912bf8ff66be5c95fb2fe945358" alt="AppStore" />
                            </div>
                            <div>
                                <img src="https://down-tw.img.susercontent.com/file/dc9067c7bbb920656633cdca0cf40e6c" alt="GooglePlay" />
                            </div>
                        </div>
                    </FlexBox>
                </FooterColumn>
            </FlexBox>
        </Container>
    </StyledFooter>
    )
};

export default Footer;