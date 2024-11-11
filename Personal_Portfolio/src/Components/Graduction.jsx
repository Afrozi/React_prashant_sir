import React from 'react'

const Graduction = ({title,school,year}) => {
  return <>
         <h1 className='font-bold text-lg'>{title}</h1>
        <p className='text-sm text-gray-700 my-2 '>
       {school}
      </p>
      <p className='text-sm text-gray-700 mb-10 font-semibold '>{year}</p>
    </>
}

export default Graduction;
