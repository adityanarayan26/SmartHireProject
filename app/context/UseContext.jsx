"use client"
import React, { createContext, useContext, useState } from 'react'

const ContextStore = createContext()
export const UseContext = () => {
    return useContext(ContextStore)
}

const ContextProvider = ({ children }) => {
    const [storeData, setStoreData] = useState(JSON.parse(localStorage.getItem('user')))
    return (
        <ContextStore.Provider value={{ storeData, setStoreData }}>
            {children}
        </ContextStore.Provider>
    )
}

export default ContextProvider