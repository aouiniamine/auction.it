"use client"
import ContentWrapper from '@/src/components/atoms/ContentWrapper';
import ImageDisplay from '@/src/components/atoms/images/preview/ImageDisplay';
import ImagesDisplay from '@/src/components/atoms/images/preview/ImagesDisplay';
import { getImageSRC, removeTokenAdmin } from '@/src/utils/general';
import { getItemByIdAsAdmin } from '@/src/utils/itemsAPIs';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page() {
    const [item, setItem] = useState(null)
    const [imageInPreview, setImageInPreview] = useState(null)
    const router = useRouter()
    const splitedPathname = usePathname().split("/")
    const id = splitedPathname[splitedPathname.length-1]
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
            <ImagesDisplay id={id} images={item.images} imageInPreview={imageInPreview} setImageInPreview={setImageInPreview}/>
        
        </ContentWrapper>
        
    )
}
