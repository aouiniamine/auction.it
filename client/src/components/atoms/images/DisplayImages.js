import React from 'react'
import Image from './Image'

export default function DisplayImages({selectedImages}) {
  return (
    <div className='grid grid-cols-5 gap-4'>
        {Object.values(selectedImages).map((image, i)=>{
        const src = URL.createObjectURL(image)
        return (
          <Image imageSource={src}/>
        )
        })}
    </div>
  )
}
