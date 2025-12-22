import React, { createContext, useEffect, useState } from 'react'
import { GetLocalStorage } from '../utils/LocalStorage'

 export const AuthContext = createContext();

const AuthProvider = ({children}) => {
const [userData , setUserData] = useState(null)

 useEffect(()=>{
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