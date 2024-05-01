"use client"
import { createContext } from 'react'

const MainContext = createContext({})

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <MainContext.Provider value={{}}>
            {children}
        </MainContext.Provider>
    )
};