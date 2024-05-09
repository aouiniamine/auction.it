import React from 'react'
import ImageDisplay from './ImageDisplay'
import { getImageSRC } from '@/src/utils/general'

export default function ImagesDisplay({id, images, imageInPreview, setImageInPreview}) {
    const pressRight = () => (setImageInPreview(imageInPreview+1))
    const pressLeft = () => (setImageInPreview(imageInPreview-1))
    return (
        <div className='flex justify-center'>

            {!!images[imageInPreview] && <ImageDisplay images={images} index={imageInPreview} src={getImageSRC(id, images[imageInPreview])} pressRight={pressRight} pressLeft={pressLeft}/>}
        </div>
    )
}
