import React, { useState } from 'react'
import Lists from './Components/Lists';

function App() {
  const List = useState(["nirmala","rahul","monu","sonu"]);
  const Listval = List[0];
  const setListval = List[1];
  console.log("State value is:", Listval);
   
  // let List = [];
  if (List.length === 0) {
    return <h1>student not found</h1>
  }
  if (!List.length > 0) {
    return <h1>student found</h1>
  }
  const onchange = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      setListval([...List, event.target.value]);
      console.log(List);
    }
  }
  return <div>
      <h1>MERN Stack Learner</h1>
      <Lists List={List}/>
      <input type="text" onKeyPress={onchange} />
    </div>
}

export default App