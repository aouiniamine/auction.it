'use client'
import React, { useEffect, useState } from 'react'
import Image from './Image'
import AddImages from './AddImages'

export default function DisplayImages({selectedImages, addImage}) {
  return(
    <div className='grid grid-cols-5 gap-4'>
      { selectedImages.map((image, i)=>{
        const src = URL.createObjectURL(image)
        return <Image key={i} imageSource={src}/>
      }
      
      )}
      {selectedImages.length < 10  && <AddImages addImage={addImage} />}
    </div>
  )
  
}
