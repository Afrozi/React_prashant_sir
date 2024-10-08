import React from 'react'

const Lists = ({List}) => {
  return (
    <div>
      <ol>
        {List.map( item =>  <li>{item}</li>)}
      </ol>
    </div>
  )
}

export default Lists
