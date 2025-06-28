import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]= useState(15)

  const addValue = () => {
    
    counter = counter +1;
    setCounter(counter)
    console.log("clicked",counter)
    document.querySelector('#para').innerHTML = " "
  }

  const redValue = () => {
    
    counter = counter -1;
    setCounter(counter)
    console.log("clicked",counter)
    if(counter===0){
      document.querySelector('#para').innerHTML = "count can not go lessser than 0 "
    }
    
  }
  return (
    <>
     <h1>Counter game</h1>
     <h2>counter value : {counter}</h2>
     <button onClick={addValue} > Add value </button>
     <button onClick= {redValue} disabled={counter === 0}> Reduce value </button>
     <p id = "para"></p>
    </>
  )
}

export default App
