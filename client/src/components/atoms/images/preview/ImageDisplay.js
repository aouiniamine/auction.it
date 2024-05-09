import React from 'react'

export default function ImageDisplay({index, images, src, pressRight, pressLeft}) {
  return (
    <div className='flex justify-center gap-10 bg-gray-50 dark:bg-gray-600 rounded-xl p-4 mb-2 hover:bg-gray-200 dark:hover:bg-gray-500 w-9/12 p-7'>
      {index > 0 && (<svg onClick={pressLeft} class="w-12 h-12 text-gray-800 dark:text-white self-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
      </svg>)}
      <img src={src} className='object-scale-down h-80 w-120'/>
      {images.length-1 > index && (<svg onClick={pressRight} class="w-12 h-12 text-gray-800 dark:text-white self-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
      </svg>)}
    </div>
  )
}
