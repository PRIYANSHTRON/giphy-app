import React, { useEffect, useState } from 'react'
import GifContainer from './GifContainer'


function Results() {

    const [giffs, setGiffs] = useState([])

    useEffect(() => {
        const getData = async () => {
            const jsonData = await fetch('https://api.giphy.com/v1/gifs/trending?&api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65');
            const response = await jsonData.json();
            setGiffs(response.data)
            console.log(response.data);
        }
        getData()
    }, [])

    return (
        <div className='w-[1100px] border border-black flex-grow mx-auto p-2 flex justify-end items-center'>
            {giffs.map((gif, i) => (
                <GifContainer key={i} embededUrl={gif.embed_url} />
            ))}
        </div>
    )
}

export default Results