import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();


export const AuthContextProvider = ({children})=>{

    const [user,setUser] = useState(()=>{
        const getUser = localStorage.getItem("user");
        
        return getUser ? JSON.parse(getUser) : null
    });
    
    useEffect(()=>{
        if(user){
            localStorage.setItem("user",JSON.stringify(user));
        }else{
            localStorage.removeItem("user");
        }
    });

    const value = {
        user,setUser
    };

    return <AuthContext value={value}>
        {children}
    </AuthContext>
}

export const useAuth = ()=> useContext(AuthContext);