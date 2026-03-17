import React, { createContext, useCallback, useEffect, useState } from 'react'
import { GetLocalStorage, SetLocalStorage } from '../utils/LocalStorage'

 export const AuthContext = createContext();

const AuthProvider = ({children}) => {
const [userData , setUserData] = useState({ employees: [], admin: [] })


  const refreshUserData = useCallback(() => {
    const { employees, admin } = GetLocalStorage();
    setUserData({ employees: employees || [], admin: admin || [] });
  }, []);

  useEffect(()=>{
        SetLocalStorage()
        refreshUserData();

        // Keep in sync if localStorage is changed (e.g. other tab)
        const onStorage = (e) => {
          if (e.key === 'employees' || e.key === 'admin') {
            refreshUserData();
          }
        };
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
    },[refreshUserData])

    
  return (
        <AuthContext.Provider value={{...userData, refreshUserData}}>
        {children}
        </AuthContext.Provider>

  )
}

export default AuthProvider