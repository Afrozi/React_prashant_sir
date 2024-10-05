import React from 'react'

const Dynamikcomponents = (props) => {
  if(!props.student) 
    return <p> No Students </p>
  return ( <ol>
    {
       props.student.map((student,index)=>{
            return <li key={student}>{student}</li>
        })
    }
       
      </ol>
  )
}

export default Dynamikcomponents
