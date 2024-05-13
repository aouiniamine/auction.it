"use client"
import { ProductContext } from '@/src/Contexts/ProductContext'
import { getToken } from '@/src/utils/general'
import React, { useContext, useState } from 'react'

export default function ProductBids({startingPrice}) {
    const [userBid, setUserBid] = useState('')
    const {bids, addBid} = useContext(ProductContext)

    const submitBid = (e) =>{
        e.preventDefault()
        console.log(3)
        addBid(userBid)
    }

    return ( 
        <div className='flex gap-40'>
            {!bids.length
            ? ( 
                <h2 className='w-60 text-xl pt-2.5'>starting price: {startingPrice}</h2>
            ) : (
                <div className='w-80 mt-1'>
                    <h2 className='text-xl'>Current Bid: {bids[bids.length-1].price}</h2>
                    <p className='text-sm mt-1'>By: {bids[bids.length-1].user.username}</p>
                </div>
            )}
            { getToken() && (
                <form onSubmit={submitBid} className='flex w-full gap-2 px-1 mt-2'>
                    <input name='bid' type='number' min={Number(bids[bids.length-1].price)+5 || Number(startingPrice.toString())+5 }  onChange={(e) => setUserBid(e.target.value)} className='py-2 w-26 rounded px-1' placeholder='Make a Bid' />
                    <button className='w-28 bg-gray-400 rounded'>Submit</button>
                </form>
            )}
        </div>
  )
}
