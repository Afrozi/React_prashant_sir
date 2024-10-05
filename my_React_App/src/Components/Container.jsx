import React from 'react'

const Container = (props) => {
  return (
    <div className='container'>
      <h1 className='App'>Hello</h1>
      {props.children}
    </div>
  )
}

export default Container
