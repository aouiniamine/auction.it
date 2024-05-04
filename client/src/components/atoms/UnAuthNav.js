import React from 'react'

export default function UnAuthNav() {
  return (
    <nav className="flex py-3 px-20 justify-between shadow-sm bg-slate-100">
        <ul className="flex gap-20">
            <li className="text-2xl">Auction</li>
            <li className="text-2xl">In Auction Now</li>
            <li className="text-2xl">About</li>
        </ul>
        <a href='/login' className="self-end text-2xl">Log In</a>
    </nav>
  )
}
