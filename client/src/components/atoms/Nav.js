"use client"
import { getToken, removeToken } from '@/src/utils/general'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


export default function Nav() {
    const router = useRouter()
    const logOut = () => {
        removeToken()
        router.replace("/")
    }
    useEffect(()=>{
        async function checkLogged() {
            const token = await getToken()
            if(!token) router.replace("/")
        }
        checkLogged()
    }, [])
    return (
        <nav className="flex py-3 px-20 justify-between shadow-sm bg-slate-100">
            <ul className="flex gap-20">
                <li className="text-2xl"><a href='/home'>Home</a></li>
                <li className="text-2xl">Add to Auction</li>
                <li className="text-2xl">About</li>
            </ul>
            <button onClick={logOut} className="self-end text-2xl">Log Out</button>
        </nav>
    )
}
