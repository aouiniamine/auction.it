"use client"
import { ProductContext } from '@/src/Contexts/ProductContext'
import React, { useContext, useState } from 'react'
import ImagesDisplay from '../atoms/images/preview/ImagesDisplay'

export default function ProductHeadContent({id, images}) {
    const [comment, setComment] = useState("")
    const {comments, imageInPreview, setImageInPreview} = useContext(ProductContext)
    console.log(imageInPreview, setImageInPreview, images)
    return (
      <div className='flex justify-center gap-10'>
          <ImagesDisplay id={id} images={images} right={"83vw"} left={"53.5vw"} imageInPreview={imageInPreview} setImageInPreview={setImageInPreview} />
          <div className='relative w-96 rounded px-7 border-2 border-gray-500 shadow-xl'>
            <h6 className='text-center border-b-2 border-gray-500 text-gray-500'>Comments</h6>
            
            <form className='flex absolute bottom-1 right-0 w-full gap-2 px-5'>
              <input name='comment' onChange={(e) => setComment(e.target.value)} className='py-2 w-4/5 rounded' />
              <button className='w-1/5 bg-gray-400 rounded'>Send</button>
            </form>
          </div>
      </div>
    )
}
