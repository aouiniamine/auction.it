"use client"
import { loginAdmin } from '@/src/utils/adminAPIs'
import { getTokenAdmin } from '@/src/utils/general'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()
  async function onSubmit(e){
    e.preventDefault()
    try{
      const authData = {username, password}
      const response = await loginAdmin(authData)
      
      router.push("/admin/products/pending")
    } catch(err) {console.log(err)}

  }
  useEffect(()=>{
    if(getTokenAdmin()){
      router.push("/admin/products/pending")
    }
  }, [])
  
  return (
    <div className='min-h-screen'>
      <div className='flex justify-center items-center'>
        <form onSubmit={onSubmit} className='w-96 h-80 flex flex-col justify-center items-center gap-6 bg-slate-100 border border-inherit rounded-xl shadow-md mt-36'>
          <input type='text' onChange={e => setUsername(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required  name='credential'/>
          <input type='password' onChange={e => setPassword(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder="********" required name='password' />
          <button type='submit' className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Log In</button>
        </form>
      </div>

    </div>
  )
}
