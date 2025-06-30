import React, { useState } from "react"

function App() {
  const [color, setColor] = useState("pink")

  return (
    <div className="w-full h-screen "
    style={{ backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
        <div className="flex flex-wrap justify-center gap-4 shadow-2xl bg-black px-3 py-3 rounded-2xl text-black"> 
          <button className="outline-none px-4 rounded-2xl" style={{ backgroundColor: "red" }} onClick={() => setColor("red")}> 
            Red
          </button>
          <button className="outline-none px-4 rounded-2xl" style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}> 
            Blue
          </button>
          <button className="outline-none px-4 rounded-2xl" style={{ backgroundColor: "green" }} onClick={() => setColor("green")}> 
            Green
          </button>
          <button className="outline-none px-4 rounded-2xl" style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}> 
            Yellow
          </button>
          <button className="outline-none px-4 rounded-2xl" style={{ backgroundColor: "olive" }} onClick={() => setColor("olive")}> 
            Olive
          </button>
          <button className="outline-none px-4 rounded-2xl" style={{ backgroundColor: "purple" }} onClick={() => setColor("purple")}> 
            Purple
          </button>
          <button className="outline-none px-4 rounded-2xl" style={{ backgroundColor: "orange" }} onClick={() => setColor("orange")}> 
            Orange
          </button>
          <button className="outline-none px-4 rounded-2xl" style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")}> 
            Pink  
          </button>
          <button className="outline-none px-4 rounded-2xl" style={{ backgroundColor: "gray" }} onClick={() => setColor("gray")}> 
            Gray
          </button>
          <button className="outline-none px-4 rounded-2xl text-white" style={{ backgroundColor: "black" }} onClick={() => setColor("black")}> 
            Black
          </button>
          <button className="outline-none px-4 rounded-2xl" style={{ backgroundColor: "white" }} onClick={() => setColor("white")}> 
            White
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
