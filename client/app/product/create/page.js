'use client'
import ContentWrapper from '@/src/components/atoms/ContentWrapper'
import Nav from '@/src/components/atoms/Nav'
import DisplayImages from '@/src/components/atoms/images/DisplayImages'
import UploadImage from '@/src/components/atoms/images/UploadImage'
import { getAllCategories } from '@/src/utils/categoriesAPIs'
import { addProductToAuction } from '@/src/utils/itemsAPIs'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const currDate =  new Date().toISOString().split("T")[0]
export default function page() {
  const [categoriesList, setCategoriesList] = useState([])
  const [images, setImages] = useState([])
  const router = useRouter()
  const selectImages = (e) => {
    const files = e.target.files
    
    if(images.length + files.length <= 10){
      console.log(images.concat(files))
      setImages(state => [...state, ...files])

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
    
    try{
      const formData = new FormData(e.target)
      images.forEach((image)=>formData.append("images", image))
      
      const addedProduct = await addProductToAuction(formData)
      console.log(addedProduct)
      router.push("/product/saved")
    } catch(error){
      console.log(error)
    }
    
  }

  return (
    <div className='h-min-screen'>
        <Nav/>
        <ContentWrapper>
          <form className='flex flex-col gap-7 items-center h-full' onSubmit={submit}>
            {!images.length ? 
            <UploadImage onSelect={selectImages} />: (
              <DisplayImages selectedImages={images} addImage={selectImages}/>
            )}
             
            <div className='flex flex-row gap-20'>
            <input type='text' name='title' minLength={10} placeholder="write the product's title" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            <input type='number' name='starting_price' min={1} placeholder='starting price?' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
            <div className='flex flex-row gap-20'>

              <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' name='category_id'>
                <option disabled selected>select a category</option>
                {categoriesList.map((category, i) =>(
                  <option key={i} value={category.id}>{category.name}</option>
                ))}
              </select>
              <input name='end_bids_at' required min={currDate} type='date' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </div>
            <textarea name='about' rows="8" minLength={101} className='block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"' placeholder="Write your description here..." style={{width: "80vw"}}/>
            <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Set To Auction</button>
          </form>
        </ContentWrapper>
    </div>
  )
}
