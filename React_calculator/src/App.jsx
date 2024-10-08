import { useState } from "react";
import Display from "./Components/Display"
import Numberpad from "./Components/Numberpad"

function App() {

  const [Displayval, setDisplayval] = useState('');

  return (
    <>
     <h1>Calculator</h1>
     <Display textToshow={Displayval}/>
     <Numberpad Displayval={Displayval}
      setDisplayval={setDisplayval}/>
    </>
  )
}

export default App
