import React, { useRef } from 'react'
import { useState } from 'react'

const TestForm = () => {

    console.log("painting form");
    
    const [FirstName, setFirstName] = useState("");

    const click = useRef(0);
    const firstName = useRef();
    const lastName = useRef();
    const dob = useRef();

    const submithandler = (event) => {
       event.preventDefault();  
    //    console.log(firstName.current.value);
    //    console.log(lastName.current.value);
    //    console.log(dob.current.value);
       
    }

    const changehandler = (event) => {
        setFirstName(event.target.value);
    }

  return (
    <div>
        <h1>StateValue:{FirstName}RefValue: {click.current} times</h1>
      <form action="/submit-data" onSubmit={submithandler}>
        <input type="text" ref={firstName} placeholder='First Name' onKeyDown={changehandler} /><br />
        <input type="text" ref={lastName} placeholder='Last Name' /><br />
        <label htmlFor="DOB"> DOB</label>
        <input type="date" ref={dob} /><br />
        <input type="submit" onClick={() => {click.current += 1}} />
      </form>
    </div>
  )
}

export default TestForm
