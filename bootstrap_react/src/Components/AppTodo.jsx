import React from 'react'

const AppTodo = () => {
  return (
    <div class="container text-center">
    <div class="row">
    <div class="col-5"><input type="text" class="form-control" placeholder="Enter Todo Here"></input></div>
    <div class="col-3"><input type="date" class="form-control" placeholder="Enter Todo Here"></input></div>
    <div class="col-2">  <button type="button" class="btn btn-success">Add</button></div>
  </div>
</div>
  )
}

export default AppTodo