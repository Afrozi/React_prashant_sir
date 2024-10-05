import React from 'react'

const Array_sum = () => {
 const marks = [56,78,90,58,78];
  
 const CalPersent = () =>{
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum = sum+marks[i];
  }
  return sum / marks.length;
 }

 return <p>afroz score {CalPersent()}% marks in this exam</p>
  
}

export default Array_sum
