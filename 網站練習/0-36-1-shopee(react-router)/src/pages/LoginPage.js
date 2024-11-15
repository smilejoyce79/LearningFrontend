import React from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import styled from "styled-components";
import banner1 from '../images/banner/banner1.jpg';
import LoginForm from '../components/auth/LoginForm';

const StyledLoginBox = styled.div`
    background-color: white;
`;
const StyledLoginContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 48px 0px;
`;

const LoginPage =()=>{
    return(
        <DefaultLayout>
            <StyledLoginBox>
                <StyledLoginContainer>
                    <img src={banner1} alt="logo" width="50%"/>
                    <LoginForm />
                </StyledLoginContainer>
            </StyledLoginBox>
        </DefaultLayout>
    );
};
export default LoginPage;