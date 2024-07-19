import React, { useEffect } from "react"
import axios from 'axios'
import {createContext,useState} from 'react'
import UserAPI from './UserApI'

export const GlobalState = createContext()

export const DataProvider = ({children}) =>{
    const [token,setToken]= useState(false)
   useEffect(() =>{
    const firstLogin =localStorage.getItem('firstLogin')
    if(firstLogin)
    {
        const refreshToken = async ()=> {
         const res = await axios.get('/user/refresh_token')
         console.log(res.data.accesstoken) 
         setToken(res.data.accesstoken)

            setTimeout(() => {
                refreshToken()
            }, 10 * 60 * 1000)
        }
        refreshToken()
    }
},[])
   
   const state = {
    token: [token, setToken],
    userAPI: UserAPI(token)

}
console.log("hi",token)
    return (  
    <GlobalState.Provider value={state}>
        {children}
    </GlobalState.Provider>
    )
}