import React from 'react'

const Heading = ({title}: {title: string}) => {
  return (
        
    <h1 className="font-bold border-b-2 pb-2 uppercase text-white text-lg mdLtext-xl lg:text-3xl">{title}</h1>
  )
}

export default Heading
