import ContentWrapper from '@/src/components/atoms/ContentWrapper'
import Nav from '@/src/components/atoms/Nav'
import Image from '@/src/components/atoms/images/Image'
import { getImageSRC } from '@/src/utils/general'
import { getInAuction } from '@/src/utils/itemsAPIs'
import React from 'react'

export default async function Home() {
  const items = await getInAuction()
  return (
    <>
      <Nav/>
      <ContentWrapper>
        <div className='grid grid-cols-3 justify-items-center'>
          {items.map((item, i)=>(
            <article className='mt-3 w-64 p-5' key={i}>
              <a href={"/product/"+item.id}>

                <Image imageSource={getImageSRC(item.id, item.images[0])}/>
                <p className='text-lg'>{item.title}</p>
                <p className='text-sm'>{item.starting_price} TND</p>
                <p className='text-sm truncate'>{item.about}</p>
              </a>
            </article>
          ))}
          
        </div>
      </ContentWrapper>
    
    </>
  )
}
