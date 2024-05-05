import React from 'react'

export default function UnAuthNav() {
  return (
    <nav className="flex py-3 px-20 justify-between shadow-xl bg-slate-100">
        <ul className="flex gap-20">
            <li className="text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Auction</li>
            <li className="text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">In Auction Now</li>
            <li className="text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</li>
        </ul>
        <a href='/login' className="self-end text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-500 md:p-0 md:dark:hover:text-amber-300 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Log In</a>
    </nav>
  )
}
