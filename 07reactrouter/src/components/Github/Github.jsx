import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/kanishkaanarang')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
        <>
        <div className='text-center bg-gray-600 text-white text-2xl p-4'>Github followers: {data.followers} 
        
        </div>
        <div>
        <img src={data.avatar_url} alt='Git picture' className='rounded-2xl w-100 h-100 mx-auto mt-4 p-5' />
        </div>
       </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/kanishkaanarang')
    return response.json()
}