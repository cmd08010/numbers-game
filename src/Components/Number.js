import React, { useState } from "react"

const Numbers = () => {
  let [numberArray, setNumberArray] = useState([])

  const addNumbers = () => {
    let number
    // console.log(Math.floor(Math.random() * 10) / 2)
    number = Math.floor(Math.random() * 10)
    console.log(numberArray.indexOf(number))
    console.log(number)
    if (number > 0 && number < 10 && numberArray.indexOf(number) === -1) {
      setNumberArray(number)
    }

    // numberArray.push(number)
    // numberArray.join(<br />)

    setNumberArray([number, ...numberArray])
  }

  const getNumberLength = () => {
    return numberArray.length
  }

  const onSubmit = e => {
    e.preventDefault()
  }

  const numbersRendered = numberArray.map(num => (
    <p className="card-text">{num}</p>
  ))

  return (
    <div>
      <div className="card">
        <h1>The Numbers Game ({})</h1>
        <p className="card-text">{getNumberLength()} unique numbers</p>
      </div>

      <form onSubmit={onSubmit}>
        <div>
          <button type="submit" onClick={addNumbers}>
            Generate Number
          </button>
        </div>
      </form>
      <div className="card">{numbersRendered}</div>
    </div>
  )
}

export default Numbers
