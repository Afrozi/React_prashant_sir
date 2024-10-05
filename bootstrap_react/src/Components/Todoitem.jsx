import React from 'react'

const Todoitem = ({id,todoText,todoDate}) => {
  return (
    <div class="container text-center">
  <div class="row">
    <div class="col-5 ">{todoText}</div>
    <div class="col-3">{todoDate}</div>
    <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
  </div>
  </div>
  )
}

export default Todoitem
