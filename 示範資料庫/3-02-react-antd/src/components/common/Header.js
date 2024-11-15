import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {Flex} from 'antd';
import { Container } from "./Container";

const StyledHeader = styled.header`
    background-color: rgba(209, 237, 233, 0.8);
    backdrop-filter : blur(2px); //毛玻璃霧化特效
    height: 100px;
    width: 100vw;
    padding: 10px 10px 0px 10px;
`
const StyledLink = styled(Link)`
  border: 1px solid blue;
  border-radius: 5px;
  padding: 3px;
`

const Header=()=>{
  return (
    <StyledHeader>
      <Container width="1300px">
        <Flex wrap gap={3}>
            <StyledLink to="/">HomePage</StyledLink>
            <StyledLink to="/A001">A001排版,頁面錨點</StyledLink>
            <StyledLink to="/A002">A002格線系統,排列定位</StyledLink>
            <StyledLink to="/A003">A003按鈕,輸入框</StyledLink>
            <StyledLink to="/A004">A004表單元素</StyledLink>
            <StyledLink to="/A005">A005表單</StyledLink>
            <StyledLink to="/A006">A006警示訊息</StyledLink>
            <StyledLink to="/A007">A007表格API資料</StyledLink>
            <StyledLink to="/A008">A008</StyledLink>
            <StyledLink to="/A009">A009</StyledLink>
            <StyledLink to="/A010">A010</StyledLink>

        </Flex>
      </Container>
    </StyledHeader>
  );
}

export default Header;
