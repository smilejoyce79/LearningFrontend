import React, { useState,useEffect } from "react";

// 註3
// 預設value為 '未登入(false)' 狀態
const defaultContextValue = {
    isLoggined: false,
};
const AuthContext = React.createContext({defaultContextValue});

export const AuthProvider =( {children} )=>{
    const [isLoggined,setIsLoggined] = useState(defaultContextValue.isLoggined); //React.useState?

    useEffect(()=>{
        try{
            const authState = JSON.parse(localStorage.getItem('shopee:auth.state'))
            if(authState && authState.token){
                setIsLoggined(true);
            }
        } catch{}
    },[]);

    return (
        <AuthContext.Provider 
        value={{
            isLoggined,
            // login 取得usename和password判斷:若usename為test,將isLoggined改為true,並取得正確的token權杖登入
            // 否則可能是null異常,或error密碼有誤...等各種情況
            login: async(usename,password)=>{
                if (usename === "test"){
                    const token = 'good_token'
                    localStorage.setItem(
                        'shopee:auth.state', 
                        JSON.stringify({token})
                    )
                    setIsLoggined(true);
                    return {token};
                }
                setIsLoggined(true)
                return{
                    token: null, error: "invalid password"
                };
                // 實務上寫法:
                // const res = await fetch('/login')
                // const res = await axios('/login')
            },
            logout: async()=>{
                localStorage.removeItem('shopee:auth.state')
                setIsLoggined(false)
            }
            }}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;