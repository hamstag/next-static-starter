"use client"
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <ul>
          <li>
            <Link href="/admin/dashboard">Go to Dashboard</Link>
          </li>
          <li>
            <Link href="/admin/profile">Go to Profile</Link>
          </li>
          <li>
            <Link href="/login">Go to Login</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
