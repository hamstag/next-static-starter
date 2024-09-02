"use client"
import Link from "next/link"

export default function Dashboard() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1>This is Dashboard</h1>
                <ul>
                    <li>
                        <Link href="/admin/profile">Go to Profile</Link>
                    </li>
                </ul>
            </div>
        </main>
    )
}