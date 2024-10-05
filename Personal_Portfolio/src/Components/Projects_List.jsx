import React from 'react'
import Tech_pill from './Tech_pill';
const Projects_List = ({title,desc,TechUsed}) => {
  return (
    <div className='bg-blue-50 max-w-4xl mx-auto rounded-xl shadow-lg p-6 mb-4'>
        <h1 className='font-semibold text-lg mb-2'>{title}</h1>
  <p className=' text-gray-700 mb-4'>
      {desc}
    </p>
    {TechUsed.map( tech => <Tech_pill title={tech}/>)}
    </div>
  )
}

export default Projects_List
