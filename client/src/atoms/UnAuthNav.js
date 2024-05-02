import React from 'react'

export default function UnAuthNav() {
  return (
    <nav className="flex py-6 px-20 justify-between">
        <ul className="flex gap-20">
            <li className="text-2xl">Auction</li>
            <li className="text-2xl">In Auction Now</li>
            <li className="text-2xl">About</li>
        </ul>
        <a className="self-end text-2xl">Log In</a>
    </nav>
  )
}
