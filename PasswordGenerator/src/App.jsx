import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] =useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [pass,setPass]=useState('');
  const [clicked, setClicked] =useState(false);
  const passRef=useRef(null)//ref hook
 
  const passGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$&*'|"

    for (let i = 0 ; i < length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPass(pass)
    setClicked(false);
  },[length, numberAllowed, charAllowed])

  const copyPassToClip = useCallback(()=>{
    passRef.current.select()
    window.navigator.clipboard.writeText(pass)
    setClicked(true);
  },[pass])

  const handleGeneratedClick = useCallback(()=>{
    passGenerator();
  },[length, numberAllowed, charAllowed, passGenerator])

  useEffect(()=>{
    passGenerator() 
  },[length,numberAllowed,charAllowed, passGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md 
        rounded-lg px-4 my-10 bg-gray-300 text-orange-600 
        font-mono font-bold text-center py-4 text-lg"
        >Password Generator
          <div className=' m-3 flex rounded-lg mb-5 overflow-hidden'>
            
            <input 
            type="text" 
            value={pass} 
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passRef}
            />

            <button
              onClick={copyPassToClip}
              className={`outline-none px-3 ${clicked ? 'bg-green-400 text-green-950' : 'bg-indigo-400 text-blue-950'}`}
            >{clicked ? 'Copied!' : 'Copy'}
            </button>

            <button
            onClick={handleGeneratedClick}
            className="outline-none bg-gray-400 text-gray-900 px-3"
            >Generate
            </button>

          </div>

          <div className='flex text-sm gap-x-4'>   
            <div className='flex items-center gap-x-1'>
              <input 
                type='range'
                min={6}
                max={20}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}
              />
              <label>
                size: {length}
              </label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
                type='checkbox'
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev)=> !prev) //reversing the prev value t<->false
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input 
                type='checkbox'
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev)=> !prev) //reversing the prev value t<->false
                }}
              />
              <label htmlFor="characterInput">Characters</label>
            </div>

          </div>

      </div> 
    </>
  )
}

export default App
