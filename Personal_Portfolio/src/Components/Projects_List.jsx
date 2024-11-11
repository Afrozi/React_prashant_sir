import React from 'react'
import Tech_pill from './Tech_pill';
const Projects_List = ({title,desc,TechUsed,msgl1,msgl2,Note,projectUrl}) => {
  return (
    <>
    <div className='bg-blue-50 max-w-4xl mx-auto rounded-xl shadow-lg p-6 mb-4'>
        <h1 className='font-semibold  border-indigo-500 text-lg mb-2'>{title}</h1>
  <p className=' text-gray-700 mb-4 flex gap-2'>
    <div className='mr-2 border-l-4 border-indigo-500' ></div>
      {desc}
    </p>
    <ul className='list-disc list-inside m-4 ' >
      <li> {msgl1} </li>
      <li className='my-2' >{msgl2}</li>
      <li className='my-2' >{Note}</li>
      <li>Live Link: <a href={projectUrl} className='text-blue-500 font-bold hover:text-blue-700' >{title} </a></li>
    </ul>
    <br />
    {TechUsed.map( tech => <Tech_pill title={tech}/>)}
    </div>
    
 
    
    </>
  )
}

export default Projects_List
