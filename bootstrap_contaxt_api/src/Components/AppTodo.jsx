import React from 'react'

const AppTodo = () => {
  return (
    <div class="container text-center">
    <div class="row">
    <div class="col-5"><input type="text" className="form-control" placeholder="Enter Todo Here"></input></div>
    <div class="col-3"><input type="date" className="form-control" placeholder="Enter Todo Here"></input></div>
    <div class="col-2">  <button type="button" className="btn btn-success">Add</button></div>
  </div>
</div>
  )
}

export default AppTodo
