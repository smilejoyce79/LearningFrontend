import React, { useContext } from "react";
import {styled, css} from 'styled-components';
import Container from "../common/Container";
import Logo from '../../images/logo_QRcode/logo.png';
import { Input } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import AuthContext from '../auth/AuthContext';

const StyledHeader = styled.header`
    background-color: #d1011c;
    width: 100vw;
    padding: 16px 0px;
`;

const StyledHeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 8px;
`;

const Navigator = styled.div`
    a{
        margin: 0px 4px;
        color:white;
        text-decoration: none;
    };
`;

const Toolbar = styled.div`
    a{
        margin: 0px 6px;
        color:white;
        text-decoration: none;
    };
`;

const FlexBox = styled.div`
    display: flex;
    align-items: center;
`
const Header = () =>{
    const {isLoggined,logout} = useContext(AuthContext)
    return (
    <StyledHeader>
        <Container>
            <StyledHeaderSection>
                <Navigator>
                    <a href='#!'>蝦皮購物</a>
                    <a href='#!'>下載</a>
                    <a href='#!'>追蹤我們</a>
                    <a href='#!'>部落格</a>
                </Navigator>    
                <Toolbar>
                    <a href='#!'>通知</a>
                    <a href='#!'>幫助中心</a>                    
                    {isLoggined ? (
                        <div>
                            <a href='#!'>Joyce</a>
                            <span onClick={()=>logout()} >登出</span>
                        </div>
                        ) : (
                        <Link to='/login'>登入/註冊</Link>
                        )
                    } {/*註3*/}
                </Toolbar>    
            </StyledHeaderSection>

            <StyledHeaderSection>
                <Link to='/'>   {/*logo_img超連結 回到首頁 */}
                    <img src={Logo} alt="logo" height={48}></img>
                </Link>
                <FlexBox>
                    <Input.Search placeholder="在商城搜尋" onSearch={(value)=>console.log(value)} enterButton />
                    <Link to='/cart'>
                           <ShoppingCartOutlined style={{fontSize:32, color: 'white', marginLeft:8 }} />
                    </Link>
                </FlexBox>  
            </StyledHeaderSection>
        </Container>        
    </StyledHeader>
    );
};
export default Header;