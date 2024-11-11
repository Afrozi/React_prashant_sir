import React from 'react'

const Todoitem = ({id,todoText,todoDate}) => {
  return (
    <div class="container text-center">
  <div class="row">
    <div className="col-5 ">{todoText}</div>
    <div className="col-3">{todoDate}</div>
    <div className="col-2 mt-2"><button type="button" className="btn btn-danger">Delete</button></div>
  </div>
  </div>
  )
}

export default Todoitem
