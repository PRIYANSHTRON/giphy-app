"use client"
import React from 'react'
import SearchBar from '../components/SearchBar'
import Results from '../components/Results'


function page() {
  return (
    <div className='h-[300px] w-full flex flex-col items-center mb-4'>
      <SearchBar />
      <Results />
    </div>
  )
}

export default page