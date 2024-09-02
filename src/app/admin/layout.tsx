"use client"
import AuthStore from "@/lib/stores/auth"
import { redirect, useRouter } from "next/navigation"
import { ReactNode, useEffect, useState } from "react"

export default function AdminLayout({ children }: { children: ReactNode }) {
    const [isClient, setIsClient] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const unsub = AuthStore.onAuthChange((auth) => {
            if (!AuthStore.isValid) {
                router.push('/login')
            }
        })

        return () => unsub()
    })

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) {
        return null
    }

    if (!AuthStore.isValid) {
        return redirect('/login')
    }

    const logout = () => {
        AuthStore.clear()
    }

    return (
        <div>
            <nav>
                <span>Hello, {AuthStore.model?.name} {AuthStore.model?.surename}</span>
                <ul>
                    <li>
                        <button type="button" onClick={logout}>Logout</button>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    )
}