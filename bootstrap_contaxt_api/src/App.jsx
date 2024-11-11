import React, { useState } from 'react'
import AppName from "./Components/AppName"
import AppTodo from "./Components/AppTodo"
import Todoitems from "./Components/Todoitems"

function App() {
 
  const initialtodoItem = [{id:1,todoText:'Buy Milk',todoDate:'7-sept-2024'},
    {id:2,todoText:'Go   to Collage',todoDate:'10-sept-2024'},
    {id:3,todoText:'Go   to Collage',todoDate:'EveryDay'}]

 const [todoItem,settodoItem] = useState(initialtodoItem);

  return (
    <>
    <center>
    <AppName todoItem={todoItem} settodoItem={settodoItem} />
    <AppTodo todoItem={todoItem} />
    <Todoitems />
     </center>
    </>
  )
}

export default App
