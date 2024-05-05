import React from 'react'

export default function Image({imageSource}) {
  return (
    <div className='bg-gray-50 dark:bg-gray-600 rounded-xl p-4 mb-2 hover:bg-gray-200 dark:hover:bg-gray-500'>
        <img src={imageSource} className='object-scale-down h-20 w-52'/>
    </div>
  )
}
