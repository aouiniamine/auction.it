import React from 'react'
import ImageDisplay from './ImageDisplay'
import { getImageSRC } from '@/src/utils/general'

export default function ImagesDisplay({id, images, imageInPreview, setImageInPreview}) {
    const pressRight = () => (setImageInPreview(imageInPreview+1))
    const pressLeft = () => (setImageInPreview(imageInPreview-1))
    return (
        <div className='flex justify-center'>
            {imageInPreview > 0 && (<svg onClick={pressLeft} style={{right: "70vw"}} class="absolute w-12 h-12 text-gray-800 dark:text-white self-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
            </svg>)}
            {!!images[imageInPreview] && <ImageDisplay src={getImageSRC(id, images[imageInPreview])}/>}
            {images.length-1 > imageInPreview && (<svg onClick={pressRight} style={{left: "70vw"}} class="absolute w-12 h-12 text-gray-800 dark:text-white self-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
            </svg>)}
        </div>
    )
}
