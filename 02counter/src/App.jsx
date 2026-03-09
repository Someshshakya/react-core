import { useState } from 'react'
import './App.css'

function App() {

let [counter, setCounter] = useState(15)
const addValue = () => { 

  setCounter(counter+1)
  console.log(" valude added")
}
const removeValue  = () => {
  setCounter(counter-1)
}
  return (
    <>
      <h1>Chai aur React </h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove </button>
    </>
  )
}

export default App
