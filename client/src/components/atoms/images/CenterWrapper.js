import React from 'react'

export default function CenterWrapper({children}) {
  return (
    <div className='flex items-center justify-center' style={{height: "93vh"}}>
        {children}
    </div>
  )
}
