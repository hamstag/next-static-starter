"use client"
import LoginHeader from "./components/LoginHeader"
import HelloHeader from "@/components/HelloHeader"
import Link from "next/link"
import { redirect, useRouter } from "next/navigation"
import LoginService from "./service"
import { useEffect, useState } from "react"
import AuthStore from "@/lib/stores/auth"

export default function Login() {
    const [isClient, setIsClient] = useState(false)
    const router = useRouter()
    const loginService = new LoginService()

    useEffect(() => {
        const unsub = AuthStore.onAuthChange((auth) => {
            if (AuthStore.isValid) {
                router.push('/admin/dashboard')
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

    const login = async () => {
        const data = await loginService.login("aa", "bb")
        AuthStore.save(data)
    }

    if (AuthStore.isValid) {
        return redirect('/admin/dashboard')
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <HelloHeader />
                <LoginHeader />
                <ul>
                    <li>
                        <Link href="/">Go to Home</Link>
                    </li>
                    <li>
                        <button onClick={login}>Login</button>
                    </li>
                </ul>
            </div>
        </main>
    )
}