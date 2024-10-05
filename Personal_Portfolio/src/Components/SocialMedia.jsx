import React from 'react'

const SocialMedia = ({url,title,icon}) => {
  return (
    <a className='flex mb-2 text-blue-700 hover:text-blue-800' href={url}>{icon} 
    <span className='ml-2'>{title}</span></a>
  )
}

export default SocialMedia
