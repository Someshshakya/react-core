import { useState, useEffect, useCallback, useRef} from 'react'
import './App.css'

function App() {
 const [password,setPassword] = useState("")
 const [silderValue,setSilderValue] = useState(6)
 const [isNumber,setNumber] = useState(false)
 const [isCharater, setCharater] = useState(false)
 const passwordRef = useRef(null)
 const copyText = ()=>{
  navigator.clipboard.writeText(password)
  passwordRef?.current.select()
  passwordRef?.current.setSelectionRange(0,10);
 }
 const passwordGenerator = useCallback(()=>{
 let pass = ''
 let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
 if (isNumber) str += '12345678'
 if (isCharater) str += '!@#$%^&*()'
 for (let i=0; i<=silderValue;i++){
   let char = Math.floor(Math.random()*str.length+1)
   pass += str.charAt(char)
 }
 setPassword(pass)
},[silderValue,isNumber,isCharater])

 useEffect(() => {
  passwordGenerator()
 },[passwordGenerator])
 
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
      <div className="bg-gray-500 p-4 rounded-md gap-2">
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
        type='text'
        value={password}
        ref={passwordRef}
        onChange={((e)=>setPassword(e.target.value))}
          id="password"
          className="outline-none w-full py-1 px-3 bg-white text-black" 
          placeholder='Password'
          />
          <button 
          className="outline-none bg-blue-500 text-black px-3 py-1 rounded"
          onClick={copyText}
          >
            Copy
          </button>
        </div>
        <div className='flex items-center'>
          <div className='flex texts-center gap-x-1'>
            <input
              type="range"
              min="6"
              max="50"
              value={silderValue}
              onChange={(e) => setSilderValue(e.target.value)}
            />
            <label>Length: {silderValue}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            defaultChecked={isNumber}
            id='numberInput'
            onChange={()=>setNumber((prev)=>!prev)}
            />
            <label htmlFor='numberInput'>Number</label>
            <input
            type='checkbox'
            defaultChecked={isCharater}
            id='charaterInput'
            onChange={()=>setCharater((prev)=>!prev)}
            />
            <label htmlFor='charaterInput'>Charaters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
