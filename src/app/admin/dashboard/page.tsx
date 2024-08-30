"use client"
import { useAuthContext } from "@/lib/providers/auth"
import Link from "next/link"

export default function Dashboard() {
    const { clear } = useAuthContext()

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1>This is Dashboard</h1>
                <ul>
                    <li>
                        <Link href="/admin/profile">Go to Profile</Link>
                    </li>
                    <li>
                        <button type="button" onClick={clear}>Logout</button>
                    </li>
                </ul>
            </div>
        </main>
    )
}