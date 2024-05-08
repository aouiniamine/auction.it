"use client"
import { approveItem, refuseItem } from '@/src/utils/itemsAPIs'
import React, { useEffect, useState } from 'react'

export default function OptionsDropdown({itemId, rmItem, index}) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdown = () => {
        setIsOpen(prevState => !prevState)
    }
    const removeItem = () => {rmItem(index), setIsOpen(false)}
    const approve = async () =>{
        try{
            const approvedItem = await approveItem(itemId)
            // removeItem()
        } catch(err){
            console.log(err)
        }
    }
    const refuse = async() =>{
        try{
            const refusedItem = await refuseItem(itemId)
            // removeItem()
        } catch(err){
            console.log(err)
        }
    }
    return (
    <div className='absolute z-50'>
        <button id="dropdownMenuIconButton" onClick={toggleDropdown} className=" inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
            </svg>
        </button>
        {isOpen && (
            <div id="dropdownDots" className="z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                <li>
                    <button className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white w-full">Preview</button>
                </li>
                <li>
                    <button className="block px-4 py-2 hover:bg-emerald-200 dark:hover:bg-gray-600 dark:hover:text-white w-full" onClick={approve}>Approve</button>
                </li>
                <li>
                    <button className="block px-4 py-2 hover:bg-amber-200 dark:hover:bg-gray-600 dark:hover:text-white w-full" onClick={refuse}>Refuse</button>
                </li>
                <li>
                    <button className="block px-4 py-2 hover:bg-red-300 dark:hover:bg-gray-600 dark:hover:text-white w-full">Delete</button>
                </li>
                
                </ul>
            </div>
        )}
    </div>
  )
}
