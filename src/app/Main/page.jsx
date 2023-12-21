"use client"
import React from 'react'
import SearchBar from '../components/SearchBar'
import Results from '../components/Results'


function page() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center'>
      <SearchBar />
      <Results />
    </div>
  )
}

export default page