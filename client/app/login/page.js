"use client"
import UnAuthNav from '@/src/components/atoms/UnAuthNav'
import { getToken, storeToken } from '@/src/utils/general'
import { login } from '@/src/utils/userAPIs'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Login() {
    const [credential, setCredential] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
  async function onSubmit(e){
    e.preventDefault()
    const userData = {credential, password}
    try{
        const response = await login(userData)
        const {token} = response
        
        await storeToken(token)
        router.push("/home")

    } catch(err) {console.log(err)}

  }
  useEffect(()=>{
    const isLogged = getToken()
    if(isLogged) router.push("/inAuction")

  }, [])
  return (
    <div className='min-h-screen'>
      <UnAuthNav/>
      <div className='flex justify-center items-center mt-36'>
        <form onSubmit={onSubmit} className='w-96 h-96 flex flex-col justify-center items-center gap-6 bg-slate-100 border border-inherit rounded-xl shadow-md'>
          <input type='text' onChange={e => setCredential(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email or username" required  name='credential'/>
          <input type='password' onChange={e => setPassword(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="********" required name='password' />
          <button type='submit' className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Log In</button>
          <a href='/register' className='text-slate-400 text-sm'>you don't have an account?</a>
        </form>
      </div>

    </div>
  )
}
