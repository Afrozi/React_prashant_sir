import React from 'react'
import Todoitem from './Todoitem'

const Todoitems = ({todoItem,deleteTodoItem}) => {
  return (
    <>
    {todoItem.map((item)=>(
     <Todoitem key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate} deleteTodoItem={deleteTodoItem} />
    ))
    }
    </>
  )
}

export default Todoitems
