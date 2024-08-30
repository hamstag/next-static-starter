"use client"
import useLocalStorage from "@/lib/hooks/useLocalStorage"
import { createContext, useContext, ReactNode, useState } from "react"

interface AuthContextValue {
    isValid: boolean
    save: (token: string) => void
    clear: () => void
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export const useAuthContext = () => {
    const authContext = useContext(AuthContext)

    if (authContext === undefined) {
        throw new Error('useAuthContext must be inside a AuthProvider')
    }

    return authContext
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const isTokenExpired = (token: string) => {
        if (!token) return true
        try {
            // const decodedToken = jwtDecode(token)
            // const currentTime = Date.now() / 1000
            // return decodedToken.exp < currentTime
            return false
        } catch (error) {
            return true
        }
    }

    const [token, setToken] = useLocalStorage("token", "");
    const [isValid, setValid] = useState(!isTokenExpired(token))

    const save = (token: string) => {
        setToken(token)
        setValid(true)
    }

    const clear = () => {
        setToken("")
        setValid(false)
    }

    const value: AuthContextValue = {
        isValid,
        save,
        clear,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}