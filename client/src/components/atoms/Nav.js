"use client"
import { getToken, removeToken } from '@/src/utils/general'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


export default function Nav() {
    const router = useRouter()
    const logOut = () => {
        removeToken()
         router.replace("/login")
    }
    return (
        <nav className="flex py-3 px-20 justify-between shadow-xl bg-slate-100">
            <ul className="flex gap-20">
                <li className="text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><a href='/inAuction'>In Auction</a></li>
                <li className="text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><a href='/product/create'>Add to Auction</a></li>
                <li className="text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</li>
            </ul>
            <button onClick={logOut} className="self-end text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:p-0 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Log Out</button>
        </nav>
    )
}
