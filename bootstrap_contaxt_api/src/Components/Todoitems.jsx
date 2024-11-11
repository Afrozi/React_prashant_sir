import React from 'react'
import Todoitem from './Todoitem'

const Todoitems = () => {
  const todoItem = [{id:1,todoText:'Buy Milk',todoDate:'7-sept-2024'},
    {id:2,todoText:'Go   to Collage',todoDate:'10-sept-2024'},
    {id:3,todoText:'Go   to Collage',todoDate:'EveryDay'}]
    
  return (
    <>
    {todoItem.map((item)=>(
     <Todoitem todoText={item.todoText} todoDate={item.todoDate} />
    ))
    }
    </>
  )
}

export default Todoitems
