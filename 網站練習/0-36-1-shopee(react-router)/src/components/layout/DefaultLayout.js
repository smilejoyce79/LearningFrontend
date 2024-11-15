import React from "react";
import {styled, css} from 'styled-components';
import Header from "./Header";
import Footer from "./Footer";
import Container from "../common/Container";

// 註1:若props為fixed則套用position:fixed這個css樣式
const PageHeader = styled.div`
    ${
    (props) => props.fixed && 
    css`
        z-index:1;
        position: fixed;
    `
    }
`;

const DefaultLayout = ({children,fixedHeader}) => {
    return (
        <div>
{/* 用props設定,控制'有套用DefaultLayout的項目'Header要固定在頁面上方or隨卷軸滾動 */}
{/*            
            {fixedHeader ? (
            <header>this is fixed Header</header>
            ) : (
            <header>this is not a fixed Header</header>
            ) }
*/}

            <PageHeader fixed={fixedHeader}>
                <Header/>
            </PageHeader>  {/*註1*/}
            <Container>{children}</Container>
            <Footer />
        </div>
    );
};
export default DefaultLayout;