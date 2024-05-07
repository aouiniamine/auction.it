import ContentWrapper from '@/src/components/atoms/ContentWrapper'
import Nav from '@/src/components/atoms/Nav'
import CenterWrapper from '@/src/components/atoms/images/CenterWrapper'
import React from 'react'

export default function Saved() {
  return (
    <>
        <Nav />
        <CenterWrapper>
            <div className='flex flex-col items-center justify-center w-8/12 h-56 shadow-xl bg-slate-100 text-center gap-5 mb-20'>
                <h3 className='text-xl text-teal-600 font-semibold leading-relaxed'>Your Item is on pendding now!!</h3>
                <h2 className='text-xl text-teal-600 font-semibold leading-relaxed'>Our moderator will contact you to sign our contract!!</h2>
            </div>
        </CenterWrapper>
    </>
  )
}
