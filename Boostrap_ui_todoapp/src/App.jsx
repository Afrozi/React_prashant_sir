import React from 'react'
import { useState } from 'react'
import AppName from './Components/AppName'
import TodoApp from './Components/TodoApp'
import Todoitems from './Components/Todoitems'
function App() {

  const initialtodoItem = [{id:1,todoText:'Buy Milk',todoDate:'7-sept-2024'},
    {id:2,todoText:'Go   to Collage',todoDate:'10-sept-2024'},
    {id:3,todoText:'Go   to Collage',todoDate:'EveryDay'}]

    const [todoItem,settodoItem] = useState(initialtodoItem);

   const AddTodoItem = (todoText,todoDate) => {
     settodoItem(currentItems => {
      return [...currentItems, {id:todoText,todoText,todoDate}]
    })
   }

const deleteTodoItem = (todoId) => {
    settodoItem(currentItems => {
      return [...currentItems.filter(item => item.id !== todoId)]
    })
}
  return (
    <>
    <center>
     <AppName/>
    <TodoApp AddTodoItem={AddTodoItem}/>
    <Todoitems todoItem={todoItem} settodoItem={settodoItem} deleteTodoItem={deleteTodoItem} />
    </center>
    </>
  )
}

export default App
