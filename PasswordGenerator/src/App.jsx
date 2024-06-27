import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

// Usecallback is a react hook that lets you cache a function definition between re-renders. we can keep function in cache
// usecallback(fn, dependencies)/ dependencies is array . basically here we need to first identify when the functions will be called i.e which of the change of fields will 
// invoke the function.
// UseEffect is a react hook that lets you synchronizing a component with external system
// UseRef is used to take reference of any value

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [passWord, setPassWord] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() =>{
    let pass=""
    let str = "ABCDEFGHIZKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "0123456789"
    }
    if(charAllowed){
      str += "!@#$%^&*_+=[]{}~`"
    }
    for(let i=1;i<=length;i++){
      let charIndex = Math.floor(Math.random()*str.length +1)
      pass+=str.charAt(charIndex)
    }
  
    setPassWord(pass)
  }, [length, numberAllowed, charAllowed, setPassWord]) 

  const copyPasswordToClipBoard= useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(passwordRef.current?.value)
  }, [passWord])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      {/* <h1 className='text-4xl text-center' style={{color: 'white'}}> Password Generator</h1> */}

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-10 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>PassWord Generator</h1>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4 my-2'>
          <input type="text" value={passWord}
            className='outline-none w-full py-1 px-3' 
            placeholder='password' readOnly ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white shrink-0 px-3 py-3'
          onClick={copyPasswordToClipBoard}>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointrer'
            onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed}
            id="numberInput" onChange={()=>{
              setNumberAllowed((prev)=>!prev)
              
            }}/>
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed}
              id="charInput" onChange={()=>{
                setCharAllowed((prev)=>!prev)
              }}/>
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
