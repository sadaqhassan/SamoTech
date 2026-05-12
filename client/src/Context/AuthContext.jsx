import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();


export const AuthContextProvider = ({children})=>{

    const BackendApi =  "http://localhost:4000/api"; 
    
    const [user,setUser] = useState(()=>{
        const getUser = localStorage.getItem("user");
        
        return getUser ? JSON.parse(getUser) : null
    });
    
    const [isLogedIn,setIsLoggedIn] = useState(false);

    useEffect(()=>{
        if(user){
            localStorage.setItem("user",JSON.stringify(user));
        }else{
            localStorage.removeItem("user");
        }
    },[user]);

    // const fetchUser = async()=>{
    //             const res = await fetch(`${BackendApi}/user/get-user`,{
    //                 method: "GET",
    //                 headers: {
    //                     "content-type": "application/json",
    //                 },
    //                 credentials: "include"
    //                 })
    //                 const data = await res.json();
    //                 if(data.success){
    //                     setUser(data.userData);
    //                 }else{
    //                     setUser(null);
    //                 }
    //             }

    const value = {
        user,setUser,
        // isLogedIn,setIsLoggedIn,fetchUser
    };

    return <AuthContext value={value}>
        {children}
    </AuthContext>
}

export const useAuth = ()=> useContext(AuthContext);