'use client'
import ContentWrapper from '@/src/components/atoms/ContentWrapper'
import Nav from '@/src/components/atoms/Nav'
import { getAllCategories } from '@/src/utils/categoriesAPIs'
import React, { useEffect, useRef, useState } from 'react'

export default function page() {
  const [title, setTitle] = useState("")
  const [categoryId, setCategoryId] = useState(null)
  const [about, setAbout] = useState("")
  const [startingPrice, setStartingPrice] = useState(null)
  const [endBidsAt, setEndBidsAt] = useState(null)
  const [categoriesList, setCategoriesList] = useState([])
  const optionsRef = useRef()
  useEffect(()=>{
    const fetchData = async () =>{
      try{

        const allCategories = await getAllCategories()
        console.log(allCategories.data.categories)
        setCategoriesList(allCategories.data.categories)
      }catch(err){ console.log(err) }
    }
    fetchData()
  }, [])

  return (
    <div className='h-screen'>
        <Nav/>
        <ContentWrapper>
          <form className='flex flex-col gap-7 items-center h-screen'>
            <div>
              <input type='file' accept="image/png, image/jpeg, image/webp" placeholder='you need to add images'/>

            </div>
            <div className='flex flex-row gap-20'>
            <input type='text' onChange={(e)=>setTitle(e.target.value)} placeholder="write the product's title" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            <input type='number' onChange={(e)=>setStartingPrice(e.target.value)} min={1} placeholder='starting price?' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            <select ref={optionsRef} onChange={e => setCategoryId(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
              <option disabled selected>select a category</option>
              {categoriesList.map((category, i) =>(
              <option key={i} value={category.id}>{category.name}</option>
              ))}
            </select>
            </div>
          </form>
        </ContentWrapper>
    </div>
  )
}
