"use client"
import { ProductContext } from '@/src/Contexts/ProductContext'
import React, { useContext, useEffect, useRef, useState } from 'react'
import ImagesDisplay from '../atoms/images/preview/ImagesDisplay'

export default function ProductHeadContent({id, images}) {
    const [userComment, setComment] = useState("")
    const commentsRef = useRef()
    const {comments: allComments, imageInPreview, setImageInPreview, sendComment} = useContext(ProductContext)
    const submitComment = (e) =>{
      e.preventDefault()
      sendComment(userComment)
    }

    useEffect(()=>{
      setTimeout(()=>{
        commentsRef.current.scrollTop = commentsRef.current.scrollHeight

      }, 150)
    }, [])
    return (
      <div className='flex justify-center gap-10'>
          <ImagesDisplay id={id} images={images} right={"83vw"} left={"53.5vw"} imageInPreview={imageInPreview} setImageInPreview={setImageInPreview} />
          <div className='relative w-96 rounded px-7 border-2 border-gray-500 shadow-xl'>
            <h6 className='text-center border-b-2 border-gray-500 text-gray-500'>Comments</h6>
            <div className='absolute overflow-y-scroll w-11/12 mt-1' style={{height: "300px"}} ref={commentsRef}>

              {allComments.map((c, i) =>(
                
                <div key={i} className='mt-3 p-2 bg-gray-100 w-11/12 rounded text-pretty'>
                  <p className='underline'>{c.user.username}:</p>
                  <p className='mt-1 break-all'>{c.comment}</p>
                </div>
              ))}
            </div>
            <form onSubmit={submitComment} className='flex absolute bottom-1 right-0 w-full gap-2 px-1'>
              <input name='comment' onChange={(e) => setComment(e.target.value)} className='py-2 w-4/5 rounded px-1' />
              <button className='w-1/5 bg-gray-400 rounded'>Send</button>
            </form>
          </div>
      </div>
    )
}
