import React from 'react'
import GifContainer from './GifContainer'


function Results() {
    return (
        <div className='w-[1100px] border border-black min-h-[300px] mx-auto p-2 flex justify-end items-center'>
            <GifContainer/>
            <GifContainer/>
            <GifContainer/>
        </div>
    )
}

export default Results