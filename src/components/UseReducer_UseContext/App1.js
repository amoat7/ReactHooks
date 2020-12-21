import "./App.css";
import React, {useReducer} from 'react';
import ComponentA from "./components/UseReducer_UseContext/ComponentA";
import ComponentB from "./components/UseReducer_UseContext/ComponentB";
import ComponentC from "./components/UseReducer_UseContext/ComponentC";

export const CountContext = React.createContext()

const initialState = 0;

const reducer = (state, action)=>{
  switch(action){
    case 'increment':
      return state + 1

    case 'decrement':
      return state - 1 

    case 'reset':
      return initialState
    
    default:
      return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>

    
    <div className="App">
     
      {/* <C1_use_reducer></C1_use_reducer> */}
      {/* <C2_use_reducer></C2_use_reducer> */}
      {/* <C3_use_reducer></C3_use_reducer> */}
      Count - {count}
      <ComponentA></ComponentA>
      <ComponentB></ComponentB>
      <ComponentC></ComponentC>
      
      </div>
    </CountContext.Provider>
  );
}

export default App;
