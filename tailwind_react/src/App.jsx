import './App.css'
import List from "./Components/List"

// const todoItems = [ {id:1,todoText:'Buy Milk',todoDate:'7-sept-2024'},
//                     {id:2,todoText:'Go   to Collage',todoDate:'10-sept-2024'},
//                     {id:3,todoText:'Go   to Collage',todoDate:'EveryDay'},
//                   ];
// console.log("------------------starting using map---------");
// const todoItemsText = todoItems.map(todoItem => todoItem.todoDate);
// console.log(todoItemsText);

// console.log("------------------ending using map---------");

                      
function App() {

  const List = ["nirmala","rahul","monu","sonu"];

  return (
    <>
       <h1 className="text-3xl font-bold underline text-red-500">
      Hello world!
    </h1>
    <List list={List}/>
    </>
  )
}

export default App
