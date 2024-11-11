import React from 'react'
import { useRef } from 'react'
const AppTodo = ({AddTodoItem}) => {
 
  const todoTextInput = useRef();
  const todoDateInput = useRef();

  const addHandler = () =>{
    const todoText = todoTextInput.current.value;
    const todoDate = todoDateInput.current.value;
    todoDateInput.current.value = " ";
    todoTextInput.current.value = " ";
    AddTodoItem(todoText,todoDate);
    
  }

  return (
    <div className="container text-center">
    <div className="row">
    <div className="col-5"><input type="text" className="form-control" placeholder="Enter Todo Here" ref={todoTextInput}></input></div>
    <div className="col-3"><input type="date" className="form-control" placeholder="Enter Todo Here" ref={todoDateInput}></input></div>
    <div className="col-2">  <button type="button" className="btn btn-success" onClick={addHandler}>Add</button></div>
  </div>
</div>
  )
}

export default AppTodo
