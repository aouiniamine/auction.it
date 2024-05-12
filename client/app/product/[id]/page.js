import { ProductProvider } from '@/src/Contexts/ProductContext'
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
    console.log(id, 777)
    const {item} = await getItemById(id)

    return (
        <ProductProvider currentBids={item.bids} currentComments={item.comments}>

            <ContentWrapper>
                <ProductHeadContent id={id} images={item.images} />

                <h3 className='text-2xl'>{item?.title}</h3>
            </ContentWrapper>
        </ProductProvider>
    )
}
