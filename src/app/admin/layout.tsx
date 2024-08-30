"use client"
import { useAuthContext } from "@/lib/contexts/auth"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isClient, setIsClient] = useState(false)
    const { isValid } = useAuthContext()

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        if (!isValid) {
            return redirect("/login")
        }
    })

    if (!isClient) {
        return null
    }

    if (!isValid) {
        return null
    }

    return (
        <div>{children}</div>
    )
}