import React from 'react'
import Button from './Button'

const Numberpad = ({Displayval,setDisplayval}) => {
  const button = ["1","2","3","4","5","6","7","8","9","0","."];
  const opration = ["+","-","*","/"];

  const addTodisplay = (text) => {
    setDisplayval(Displayval + text);
  }

  const evalexpresion = () => {
    const result = eval(Displayval);
    setDisplayval(result);
  }

  return ( 
     <>
    <Button text="C" onclickhandler={()=>setDisplayval('')}/>
    <br />
    {button.map( text => <Button text={text} onclickhandler={()=>addTodisplay (text)}/>)}
    <br />
    {opration.map( text => <Button text={text} onclickhandler={()=>addTodisplay (text)}/>)}
    <br />
    <Button text="=" onclickhandler={evalexpresion}/>
    </>
)
}

export default Numberpad
