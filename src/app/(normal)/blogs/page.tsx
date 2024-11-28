import envConfig from '@/config/envConfig'
import React from 'react'

const Page = async () => {
    const response = await fetch(`${envConfig.baseApi}/blog` );
    const BlogData = await response.json();
    console.log(BlogData)
  return (
    <div className='text-white  mt-20 min-h-screen'>
      blog Page
    </div>
  )
}

export default Page
