import React, { createContext, useEffect, useState } from 'react'
import { GetLocalStorage, SetLocalStorage } from '../utils/LocalStorage'

 export const AuthContext = createContext();

const AuthProvider = ({children}) => {
const [userData , setUserData] = useState(null)


 useEffect(()=>{
        SetLocalStorage()
        const {employees, admin } = GetLocalStorage()
        setUserData({employees, admin})
    },[])

    
  return (
        <AuthContext.Provider value={userData}>
        {children}
        </AuthContext.Provider>

  )
}

export default AuthProvider