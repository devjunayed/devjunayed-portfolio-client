import React from 'react'

const Heading = ({title}: {title: string}) => {
  return (
        
    <h1 className="font-bold border-b-2 pb-2  text-white text-lg md:text-xl lg:text-3xl font-mono">{title}</h1>
  )
}

export default Heading
