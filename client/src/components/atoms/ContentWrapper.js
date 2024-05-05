import { checkCustomRoutes } from 'next/dist/lib/load-custom-routes'
import React from 'react'

export default function ContentWrapper({children}) {
  return (
    <div className='flex justify-center'>
      <div className='w-10/12 mt-5'>
          {children}
      </div>
    </div>
  )
}
