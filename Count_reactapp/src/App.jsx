import { useReducer, useRef } from "react";

const countreducer = (currentState, action) => {
    console.log('in reducer',currentState, action);
    let newcurrent = currentState;

    switch (action.type) {
      case 'INCREMENT':
        newcurrent  += 1;
        break;
    case 'DECREMENT':
      newcurrent -= 1;  
      break;
      case 'RESET':
        newcurrent = 0;
        break;
        case 'DOUBLE':
          newcurrent *= 2;
          break;
          case 'CHANGE':
            newcurrent = newcurrent + parseInt(action.payload.num);
            break;
      default:
        break;
    }
    return newcurrent;
     
}

function App() {
  const initialState = 0;
  const ChangeByInput = useRef();
  const [counterVal, counterDispatch] = useReducer(countreducer, initialState);

  const handleIncrement = () => {
     console.log('hello');
     counterDispatch({type: 'INCREMENT'});
     
  }
  const handleDecrement = () => {
       counterDispatch({type: 'DECREMENT'});
  }

  const handleChangeBy = () => {
    const num = ChangeByInput.current.value;
         ChangeByInput.current.value = 0;
      counterDispatch({type: 'CHANGE',
      payload: {num}
      });
  }
  return (
    <>
    <center>
    <h1>Count: {counterVal}</h1>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={() => counterDispatch({type: 'RESET'})}>Reset</button>
    <button onClick={() => counterDispatch({type: 'DOUBLE'})}>Double</button>
    <button onClick={handleChangeBy}>Change By</button>
    <input type="text" placeholder="Number" ref={ChangeByInput} />
    </center>
    </>
  )
}

export default App
