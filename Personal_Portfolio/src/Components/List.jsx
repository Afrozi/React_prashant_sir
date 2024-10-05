import React from 'react'

const List = ({items}) => {
  return (
    <ul className='list-disc list-inside ml-5 text-gray-700'>
      {items.map(items =>  <li className='ml-2'>{items}</li>) }
    </ul>
  )
}

export default List
