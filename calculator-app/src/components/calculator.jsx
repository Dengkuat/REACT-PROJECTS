import React from 'react'
import { useState } from 'react'

export default function Calculator() {
  const [display, setDisplay] = useState('0')

  const handleNumber = (num) => {
    setDisplay(prev => prev === "0" ? num : prev + num);
  };
  return (
    <div>
      {/* full container  */}
      <div>

        {/* buttons  */}
        <div className="grid grid-cols-4">
          {/* display content  */}
        <button className='bg-[#858693] col-span-4 p-5 rounded-t-2xl flex items-end justify-end text-4xl text-white borderx-[#858693]'>{display}</button>

        {/* actual buttons  */}
          <button className='border p-6 text-2xl  font-semibold cursor-default bg-[#e0e0e0] border-x-[#858693] border-t-[#858693]' onClick={() => handleNumber("0")}>AC</button>
          <button className='border p-4 text-2xl  font-semibold cursor-default bg-[#e0e0e0] border-r-[#858693] border-t-[#858693]' onClick={() => handleNumber("+/-")}>+/-</button>
          <button className='border p-4 text-2xl  font-semibold cursor-default  bg-[#e0e0e0] border-y-[#858693]' onClick={() => handleNumber("%")}>%</button>
          <button className='border p-4 text-2xl  font-semibold cursor-default bg-[#f4913e] border-[#858693]' onClick={() => handleNumber("")}></button>
          <button className='border p-4 text-2xl  font-semibold cursor-default
          bg-[#e0e0e0] border-x-[#858693] border-t-[#858693]' onClick={() => handleNumber("7")}>7</button>
          <button className='border p-4 text-2xl  font-semibold  cursor-default   
          bg-[#e0e0e0] border-y-[#858693]' onClick={() => handleNumber("8")}>8</button>
          <button className='border p-4 text-2xl  font-semibold cursor-default
          bg-[#e0e0e0] border-l-[#858693] border-b-[#858693]' onClick={() => handleNumber("9")}>9</button>
          <button className='border p-4 text-2xl  font-semibold cursor-default bg-[#f4913e] border-[#858693]
          ' onClick={() => handleNumber("x")}>x</button>
          <button className='border p-4 text-2xl  font-semibold cursor-default
          bg-[#e0e0e0] border-x-[#858693] border-t-[#858693]' onClick={() => handleNumber("4")}>4</button>
          <button className='border p-4 text-2xl  font-semibold cursor-default
          bg-[#e0e0e0] border-b-[#858693]' onClick={() => handleNumber("5")}>5</button>
          <button className='border p-4 text-2xl  font-semibold cursor-default
          bg-[#e0e0e0] border-l-[#858693] border-b-[#858693]' onClick={() => handleNumber("6")}>6</button>
          <button className='border p-4 text-2xl  font-semibold cursor-default
          bg-[#f4913e] border-[#858693]' onClick={() => handleNumber("-")}>-</button>
          <button className='border p-4 text-2xl  font-semibold cursor-default
          bg-[#e0e0e0] border-x-[#858693] border-t-[#858693]' onClick={() => handleNumber("1")}>1</button>
          <button className='border p-4 text-2xl  font-semibold cursor-default
          bg-[#e0e0e0] border-r-[#858693]' onClick={() => handleNumber("2")}>2</button>
          <button className='border p-4 text-2xl  font-semibold cursor-default
          bg-[#e0e0e0]' onClick={() => handleNumber("3")}>3</button>
          <button className='border p-4 text-2xl  font-semibold cursor-default
          bg-[#f4913e] border-[#858693]' onClick={() => handleNumber("+")}>+</button>
          <button className='border p-4 text-2xl  font-semibold cursor-default
           col-span-2 bg-[#e0e0e0] border-[#858693]'>0</button>
          <button className='border p-4 text-2xl  font-semibold cursor-default
          bg-[#e0e0e0] border-y-[#858693]'>.</button>
          <button className='border p-4 text-2xl  font-semibold cursor-default
          bg-[#f4913e] border-[#858693]'>=</button>
        </div>
      </div>
    </div>
  )
}
