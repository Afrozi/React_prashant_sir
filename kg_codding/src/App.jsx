import { useState } from 'react'
import Reading from './Components/Reading';
import Artical from './Components/Artical';
import Dynamikcomponents from './Components/Dynamikcomponents';
import { Destructure, Destructurecomponents } from './Components/Destructurecomponents';
import Array_sum from './Components/Array_sum';
import RandomMath from './Components/RandomMath';
import Tittle from './Components/Tittle';
import Button from './Components/Button';

function App() {

  const student = ["afrozkhan","rahul","mohit","monu","sonu"];
  const studentList = ["banana","mango","apple","grapes","orange"];

  return (
    <>
    <Tittle text="hello world" />
     <Reading />
     <RandomMath />
     <RandomMath />
     <RandomMath />
     <RandomMath />
     <Artical />
     <Dynamikcomponents  student={student} />
     <Destructurecomponents />
     <Destructure />
     <Array_sum />
     <Dynamikcomponents  student={studentList} />
     <Button />
    </>
  )
}

export default App
