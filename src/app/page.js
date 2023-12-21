"use client"
import React from 'react'
import Link from 'next/link'

function page() {

  return (
    <>
      <div
        className='min-h-screen w-full flex justify-center items-center bg-slate-100'
      >
        <div
          className='border-black border-2 p-12 rounded-md border-dashed'
        >
          <h1
            className='p-8 text-[64px]'
          >GIPHY APP
          </h1>
          <div
            className='flex justify-center items-center border-black gap-8'
          >
            <div
              title='Login Page'
              className='bg-blue-700 py-1 px-4 text-xl text-white rounded-md border-blue-700 border-2 hover:scale-90'
            >
              <Link href="/Login">
                Login
              </Link>
            </div>
            <div
              title='Signup Page'
              className='border-black py-1 px-4 text-xl rounded-md border-2 hover:scale-90'>
              <Link href="/Signup">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page