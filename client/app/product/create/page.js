'use client'
import ContentWrapper from '@/src/components/atoms/ContentWrapper'
import Nav from '@/src/components/atoms/Nav'
import DisplayImages from '@/src/components/atoms/images/DisplayImages'
import UploadImage from '@/src/components/atoms/images/UploadImage'
import { getAllCategories } from '@/src/utils/categoriesAPIs'
import { Fleur_De_Leah } from 'next/font/google'
import React, { useEffect, useRef, useState } from 'react'

export default function page() {
  const [title, setTitle] = useState("")
  const [categoryId, setCategoryId] = useState(null)
  const [about, setAbout] = useState("")
  const [startingPrice, setStartingPrice] = useState(null)
  const [endBidsAt, setEndBidsAt] = useState(null)
  const [categoriesList, setCategoriesList] = useState([])
  const [images, setImages] = useState([])

  const selectImages = (e) => {
    const files = e.target.files
    if(images.length + files.length <= 10){
      setImages(files)

    }
  }
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const allCategories = await getAllCategories()
        setCategoriesList(allCategories.data.categories)

      }catch(err){ console.log(err) }
    }
    fetchData()
  }, [])

  const submit = async (e) =>{
    e.preventDefault()
    const product = {images, title, categoryId, about, startingPrice}
    console.log(product)
  }

  return (
    <div className='h-min-screen'>
        <Nav/>
        <ContentWrapper>
          <form className='flex flex-col gap-7 items-center h-full' onSubmit={submit}>
            {!images.length ? 
            <UploadImage onSelect={selectImages} />: (
              <DisplayImages selectedImages={images} />
            )}
             
            <div className='flex flex-row gap-20'>
            <input type='text' onChange={(e)=>setTitle(e.target.value)} placeholder="write the product's title" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            <input type='number' onChange={(e)=>setStartingPrice(e.target.value)} min={1} placeholder='starting price?' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            <select onChange={e => setCategoryId(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
              <option disabled selected>select a category</option>
              {categoriesList.map((category, i) =>(
              <option key={i} value={category.id}>{category.name}</option>
              ))}
            </select>
            </div>
            <textarea rows="8" onChange={e => setAbout(e.target.value)} className='block p-2.5 w-9/12 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"' placeholder="Write your description here..."/>
            <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Set To Auction</button>
          </form>
        </ContentWrapper>
    </div>
  )
}
