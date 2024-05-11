"use client"
import { getToken } from '@/src/utils/general'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function CheckLogged() {
    const router = useRouter()
    useEffect(()=>{
        async function checkLogged() {
            const token = await getToken()
            if(!token) router.replace("/")
        }
    checkLogged()
    }, [])
  return (<></>)
}
