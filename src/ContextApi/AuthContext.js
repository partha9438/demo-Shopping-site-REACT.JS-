import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import  { auth } from "../Firebase/Firebase";

export let UserAuthContext= createContext();
export const AuthContext=({children})=>{
    let [user,setuser]=useState(null);
    useEffect(()=>{
        onAuthStateChanged(auth,userInfo=>{
           if(userInfo){
            setuser(userInfo)
           }else{
            setuser(null)
           }
        })
    },[])
    return <UserAuthContext.Provider value={user}>
            {children}
    </UserAuthContext.Provider>
}