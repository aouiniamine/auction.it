import { ProductProvider } from '@/src/Contexts/ProductContext'
import ProductBids from '@/src/components/Product/ProductBids'
import ProductHeadContent from '@/src/components/Product/ProductHeadContent'
import ContentWrapper from '@/src/components/atoms/ContentWrapper'
import Nav from '@/src/components/atoms/Nav'
import ImagesDisplay from '@/src/components/atoms/images/preview/ImagesDisplay'
import { getItemById } from '@/src/utils/itemsAPIs'
import { headers } from 'next/headers'
import React from 'react'

export default async function page() {
    const headersList = headers()
    const id = headersList.get('current-path').split("/").pop()
    const {item} = await getItemById(id)

    return (
        <>
            <Nav></Nav>
            <ProductProvider currentBids={item.bids} currentComments={item.comments} id={id}>

                <ContentWrapper>
                    <ProductHeadContent id={id} images={item.images} />
                    <div className='w-11/12 p-5 ml-24'>
                        <h3 className='text-2xl'>{item?.title}</h3>

                        <ProductBids startingPrice={item.starting_price} />
                        
                        <p className='text-xl mt-7 break-all'>{item.about}</p>
                        
                    </div>
                </ContentWrapper>
            </ProductProvider>
        </>
    )
}
