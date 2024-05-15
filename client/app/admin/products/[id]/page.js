"use client"
import ContentWrapper from '@/src/components/atoms/ContentWrapper';
import ImageDisplay from '@/src/components/atoms/images/preview/ImageDisplay';
import ImagesDisplay from '@/src/components/atoms/images/preview/ImagesDisplay';
import { getImageSRC, removeTokenAdmin } from '@/src/utils/general';
import { approveItem, deleteItem, getItemByIdAsAdmin, refuseItem } from '@/src/utils/itemsAPIs';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [item, setItem] = useState(null)
    const [imageInPreview, setImageInPreview] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const toggleDropdown = () => (setIsOpen(!isOpen))
    const router = useRouter()
    const splitedPathname = usePathname().split("/")
    const id = splitedPathname[splitedPathname.length-1]
    const approve = async() =>{
        try {

            const item = await approveItem(id)
            router.push("/admin/products/pending")
        } catch(err){
            console.log(err)
        }
    }

    const itemDelete = async() => {
        try {

            const item = await deleteItem(id)
            router.replace("/admin/products/pending")
        } catch(err){
            console.log(err)
        }
    }
    const refuse = async () => {
        try {

            const item = await refuseItem(id)
            router.push("/admin/products/pending")
        } catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        (async()=>{
            try{
                const {item} = await getItemByIdAsAdmin(id)
                console.log(item)
                setItem(item)
                setImageInPreview(0)
            } catch(err){
                console.log(err.response)
                if (err.response.status === 440){
                    removeTokenAdmin()
                    router.replace("/admin/login")
                }
            }
        })()
    }, [])
    return item && (
        <ContentWrapper>
            <div className='w-10/12  ml-24 p-8 rounded-xl bg-white'>
            <ImagesDisplay id={id} images={item.images} imageInPreview={imageInPreview} setImageInPreview={setImageInPreview} right={"70vw"} left={"70vw"}/>
                <div className='flex justify-around mt-5'>
                    <div>
                        <p className='text-2xl border-b-2 border-b-neutral-400'>Title</p>
                        <h3 className='text-xl mt-1'>{item.title}</h3>
                        <div>
                            <p className='text-2xl border-b-2 border-b-neutral-400 mt-12'>Starting Price</p>
                            <h3 className='text-xl mt-1'>{item.starting_price} TND</h3>
                        </div>
                    </div>
                    <div>
                        <div>

                        <p className='text-2xl border-b-2 border-b-neutral-400'>User Details</p>
                        <h3 className='text-xl mt-1'>{item.user_item.username}</h3>
                        <h3 className='text-xl mt-1'>{item.user_item.email}</h3>
                        </div>
                    <div className='mt-4 z-50'>
                        <button id="dropdownMenuIconButton" onClick={toggleDropdown} className="inline-flex self-center items-center  hover:border-b-2 border-b-neutral-400 w-56 p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600" type="button">
                            <span className='text-2xl'>- Options</span>
                        </button>
                        {isOpen && (
                            <div id="dropdownDots" className="absolute z-50 bg-white divide-y divide-gray-100 shadow w-56 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                                    <li>
                                        <button className="block px-4 py-2 hover:bg-emerald-200 dark:hover:bg-gray-600 dark:hover:text-white w-full" onClick={approve}>Approve</button>
                                    </li>
                                    <li>
                                        <button className="block px-4 py-2 hover:bg-amber-200 dark:hover:bg-gray-600 dark:hover:text-white w-full" onClick={refuse}>Refuse</button>
                                    </li>
                                    <li>
                                        <button className="block px-4 py-2 hover:bg-red-300 dark:hover:bg-gray-600 dark:hover:text-white w-full" onClick={itemDelete}>Delete</button>
                                    </li>
                                
                                </ul>
                            </div>
                        )}
                    </div>
                    </div>
                </div>
                <p className='text-2xl border-b-2 border-b-neutral-400 mt-8'>Description</p>
                <div className='flex justify-center mt-7'>

                    <p className='w-9/12 text-pretty ml-2/12 break-words' contenteditable="true">{item.about}</p>
                </div>
            </div>
        </ContentWrapper>
        
    )
}
