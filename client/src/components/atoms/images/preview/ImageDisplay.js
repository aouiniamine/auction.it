import React from 'react'

export default function ImageDisplay({src}) {
  return (
    <div className='flex justify-center gap-10 bg-gray-50 dark:bg-gray-600 rounded-xl p-4 mb-2 hover:bg-gray-200 dark:hover:bg-gray-500 w-9/12 p-7'>
      
      <img src={src} className='object-scale-down h-80 w-120 self-center'/>
      
    </div>
  )
}
