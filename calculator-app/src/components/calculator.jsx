import React, { useState } from 'react'

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [firstValue, setFirstValue] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForSecond, setWaitingForSecond] = useState(false)

  const handleNumber = (num) => {
    if (waitingForSecond) {
      setDisplay(num)
      setWaitingForSecond(false)
    } else {
      setDisplay(prev => prev === '0' ? num : prev + num)
    }
  }

  const handleOperator = (op) => {
    setFirstValue(parseFloat(display))
    setOperator(op)
    setWaitingForSecond(true)
  }

  const handleEqual = () => {
    if (firstValue === null || operator === null) return

    const secondValue = parseFloat(display)
    let result = 0

    switch (operator) {
      case '+':
        result = firstValue + secondValue
        break
      case '-':
        result = firstValue - secondValue
        break
      case 'x':
        result = firstValue * secondValue
        break
      case '÷':
        result = firstValue / secondValue
        break
      case '%':
        result = firstValue % secondValue
        break
      default:
        return
    }

    setDisplay(String(result))
    setFirstValue(null)
    setOperator(null)
    setWaitingForSecond(false)
  }

  const handleSignChange = () => {
    setDisplay(prev => String(parseFloat(prev) * -1))
  }

  const handleClear = () => {
    setDisplay('0')
    setFirstValue(null)
    setOperator(null)
    setWaitingForSecond(false)
  }

  return (
    <div>
      <div>
        <div className="grid grid-cols-4">

          <button className='bg-[#858693] col-span-4 p-5 rounded-t-2xl flex items-end justify-end text-4xl text-white borderx-[#858693]'>
            {display}
          </button>

          <button className='border p-6 text-2xl font-semibold cursor-default bg-[#e0e0e0]'
            onClick={handleClear}>
            AC
          </button>

          <button className='border p-4 text-2xl font-semibold cursor-default bg-[#e0e0e0]'
            onClick={handleSignChange}>
            +/-
          </button>

          <button className='border p-4 text-2xl font-semibold cursor-default bg-[#e0e0e0]'
            onClick={() => handleOperator('%')}>
            %
          </button>

          <button className='border p-4 text-2xl font-semibold cursor-default bg-[#f4913e]' onClick={() => handleNumber("-")}>÷</button>

          <button className='border p-4 text-2xl font-semibold cursor-default bg-[#e0e0e0]'
            onClick={() => handleNumber("7")}>7</button>

          <button className='border p-4 text-2xl font-semibold cursor-default bg-[#e0e0e0]'
            onClick={() => handleNumber("8")}>8</button>

          <button className='border p-4 text-2xl font-semibold cursor-default bg-[#e0e0e0]'
            onClick={() => handleNumber("9")}>9</button>

          <button className='border p-4 text-2xl font-semibold cursor-default bg-[#f4913e]'
            onClick={() => handleOperator("x")}>x</button>

          <button className='border p-4 text-2xl font-semibold cursor-default bg-[#e0e0e0]'
            onClick={() => handleNumber("4")}>4</button>

          <button className='border p-4 text-2xl font-semibold cursor-default bg-[#e0e0e0]'
            onClick={() => handleNumber("5")}>5</button>

          <button className='border p-4 text-2xl font-semibold cursor-default bg-[#e0e0e0]'
            onClick={() => handleNumber("6")}>6</button>

          <button className='border p-4 text-2xl font-semibold cursor-default bg-[#f4913e]'
            onClick={() => handleOperator("-")}>-</button>

          <button className='border p-4 text-2xl font-semibold cursor-default bg-[#e0e0e0]'
            onClick={() => handleNumber("1")}>1</button>

          <button className='border p-4 text-2xl font-semibold cursor-default bg-[#e0e0e0]'
            onClick={() => handleNumber("2")}>2</button>

          <button className='border p-4 text-2xl font-semibold cursor-default bg-[#e0e0e0]'
            onClick={() => handleNumber("3")}>3</button>

          <button className='border p-4 text-2xl font-semibold cursor-default bg-[#f4913e]'
            onClick={() => handleOperator("+")}>+</button>

          <button className='border p-4 text-2xl font-semibold cursor-default col-span-2 bg-[#e0e0e0]'
            onClick={() => handleNumber('0')}>0</button>

          <button className='border p-4 text-2xl font-semibold cursor-default bg-[#e0e0e0]'
            onClick={() => handleNumber('.')}>.</button>

          <button className='border p-4 text-2xl font-semibold cursor-default bg-[#f4913e]'
            onClick={handleEqual}>
            =
          </button>

        </div>
      </div>
    </div>
  )
}