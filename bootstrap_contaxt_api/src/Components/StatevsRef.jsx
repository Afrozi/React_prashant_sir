import React from 'react'
import { useState, useRef } from 'react'

const StatevsRef = () => {
    const [state, setstate] = useState(0);
    const refclick = useRef(0);

    const stateclick = () => {
        console.log("state click");
        setstate(state + 1);
    }

    const refclicks = () => {
        console.log("ref click");
        refclick.current += 1;
    }

  return (
    <div>
        <h1>State:{state}</h1>
        <h1>Ref:{refclick.current}</h1>
      <button onClick={stateclick}>State</button>
      <button onClick={refclicks}>Ref</button>
    </div>
  )
}

export default StatevsRef
