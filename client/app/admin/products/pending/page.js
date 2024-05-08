"use client"
import OptionsDropdown from '@/src/components/atoms/OptionsDropdown'
import CenterWrapper from '@/src/components/atoms/images/CenterWrapper'
import Image from '@/src/components/atoms/images/Image'
import { getImageSRC, removeTokenAdmin } from '@/src/utils/general'
import { getPendingItems } from '@/src/utils/itemsAPIs'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Pending() {
  const [pendingItems, setPendingItems] = useState([])
  const router = useRouter()
  const rmItem = (index) => {
    let items = [...pendingItems]
    items.splice(index, 1)
    setPendingItems(items)

  }
  useEffect(()=>{
    (async()=>{
      try{

        const pending = await getPendingItems()
        setPendingItems(pending.items)
      } catch(err){
        if (err.response.status === 440){
          removeTokenAdmin()
          router.replace("/admin/login")
        }
      }
    })()
  }, [])
  return (
    <CenterWrapper>
      <div className='w-10/12 grid grid-cols-3 gap-10'>
        {pendingItems.map((item, i) =>(
          <article key={i} className='relative w-96 bg-white h-56 text-wrap p-3 rounded-lg'>
            <OptionsDropdown itemId={item.id} index={i} rmItem={rmItem} />
            <div className='absolute'>
            <Image imageSource={getImageSRC(item.id, item.images[0])}/>

              <h2 className='text-xl mb-2 truncate'>{item.title}</h2>
              <p className='text-sm truncate' style={{width: "340px"}}>{item.about}</p>
            </div>
          </article>
        ))}
        <script src="https://unpkg.com/flowbite@1.5.1/dist/flowbite.js"></script>
      </div>
    </CenterWrapper>
  )
}
