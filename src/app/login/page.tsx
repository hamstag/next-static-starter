"use client"
import { useAuthContext } from "@/lib/contexts/auth"
import { redirect } from "next/navigation"
import { useEffect } from "react"
import LoginHeader from "./components/LoginHeader"
import HelloHeader from "@/components/HelloHeader"

export default function Login() {
    const { isValid, save } = useAuthContext()

    useEffect(() => {
        if (isValid) {
            return redirect("/admin/dashboard")
        }
    })

    if (isValid) {
        return null
    }

    const login = () => {
        save("1234")
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <HelloHeader />
                <LoginHeader />
                <ul>
                    <li>
                        <button onClick={login}>Login</button>
                    </li>
                </ul>
            </div>
        </main>
    )
}