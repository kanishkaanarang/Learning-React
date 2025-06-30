import { useState, useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  const[numall, setNumall] = useState(false)
  const[charall, setCharall] = useState(false)
  const[password, setPassword] = useState('')


  // ref hook is used to store the password so that it doesn't change on every render
  const passwordRef = useRef(null)
  
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(numall) {
      str += '0123456789'
    }
    if(charall) {
      str += '!@#$%^&*()_+[]{}|;:,.<>?'
    }
    for(let i = 1; i <=length; i++) {
      const char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)


  },[length, numall, charall,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 30); // For mobile devices
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() =>
    {passwordGenerator()},
   [length, numall, charall, passwordGenerator])


  return (
    <>
    
     <div className='w-full max-w-lg mx-auto shadow-lg rounded-xl px-8 py-4 my-8 text-white bg-gray-700'>
      <h1 className='text-2xl font-bold text-center my-4'>Password Generator</h1>
      <div className= " flex shadow rounded-2xl overflow-hiden mb-4 ">
        <input
        type='text'
        value={password}
        className='w-full px-4 py-2 text-lg bg-gray-800 text-white rounded-l-xl focus:outline-none'
        placeholder='Generated Password'
        readOnly
        ref={passwordRef}>
        </input>
        <button className='outline-none bg-blue-950 text-white px-3 py-0.5 shrink-0 rounded-r-2xl'
        onClick={copyPasswordToClipboard}>
        copy 
        </button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range'
          min='4'
          max='30'
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          />
          <label> Length: {length}</label>
        </div>

         <div className="flex items-center gap-x-1">
          <input
          type="checkbox"
          defaultChecked={numall}
          id="numberInput"
          onChange={() => {
              setNumall((prev) => !prev);
          }}
      />
          <label htmlFor="numberInput">Numbers</label>
         </div>

          <div className="flex items-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={charall}
            id="charInput"
            onChange={() => {
                setCharall((prev) => !prev);
            }}
        />
          <label htmlFor="charInput">Characters</label>
         </div>

      </div>
     </div>
    </>
  )
}

export default App
