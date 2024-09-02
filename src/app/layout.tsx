"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import React, { } from "react";
import { Provider } from "jotai";
import AuthStore from "@/lib/stores/auth";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Provider store={AuthStore.store}>
                    {children}
                </Provider>
            </body>
        </html>
    );
}