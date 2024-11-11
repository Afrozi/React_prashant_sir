import React from 'react'

const Todoitem = ({id,todoText,todoDate,deleteTodoItem }) => {

// const deleteHandler = (event) => {
//    console.log(event);
//    console.log(`Trying to delete ${id} ${todoText}`);
   
   
// }

  return (
    <div className="container text-center">
  <div className="row">
    <div className="col-5 ">{todoText}</div>
    <div className="col-3">{todoDate}</div>
    <div className="col-2 mt-2"><button type="button" className="btn btn-danger" onClick={()=>{deleteTodoItem(id)}}>Delete</button></div>
  </div>
  </div>
  )
}

export default Todoitem
