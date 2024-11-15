import { Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import React, { useContext, useState,useEffect } from "react";
import AuthContext from "./AuthContext";
import {message} from 'antd';
import {useNavigate} from 'react-router-dom';

const LoginForm =()=>{

    const Navigate = useNavigate();

    const {login, isLoggined} = useContext(AuthContext);

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const handleLogin =()=>{
        // call login API
        console.log('handle login')
        login(username,password).then(({token,error})=>{
            if(!token){
                message.error(error);
            }
        })
    };

    useEffect(()=>{
        isLoggined && Navigate("/");
    },[isLoggined]);

    return(
        <div>
            {/* 待改用 tailwindcss 寫className="mb-3" */}
            <Input 
                size="large" 
                placeholder="請輸入帳號" 
                prefix={<UserOutlined />} 
                style={{margin:"10px"}}
                value={username} 
                onChange={e => setUsername(e.target.value)}
            />
            <Input 
                size="large" 
                type="password" 
                placeholder="請輸入密碼" 
                prefix={<LockOutlined />} 
                style={{margin:"10px"}}
                value={password} 
                onChange={e => setPassword(e.target.value)}
            />
            <Button 
                onClick={handleLogin}
                style={{margin:"10px"}}
            >
                登入
            </Button>
        </div>
    );
};
export default LoginForm;

