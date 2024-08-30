"use client"
import Link from "next/link";

export default function Profile() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1>This is Profile</h1>
                <ul>
                    <li>
                        <Link href="/admin/dashboard">Go to Dashboard</Link>
                    </li>
                </ul>
            </div>
        </main>
    )
}