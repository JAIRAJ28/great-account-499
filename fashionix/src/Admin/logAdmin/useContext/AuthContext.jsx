import React, { useState } from 'react'
import { createContext } from 'react'



export const AuthContext=createContext()

export const AuthContextProvider = ({children}) => {
    let[state,setState]=useState(false)
    console.log(state)
  return (
    <AuthContext.Provider value={{state,setState}}>
        {children}
    </AuthContext.Provider>
  )
}
