import React, { useState } from "react"

const Numbers = () => {
  let [numberArray, setNumberArray] = useState([])
  let [uniqueNumberArray, setUniqueNumberArray] = useState([])

  const addNumbers = () => {
    let number
    // console.log(Math.floor(Math.random() * 10) / 2)
    number = Math.floor(Math.random() * 10)

    if (number > 0 && number < 10) {
      setNumberArray([number, ...numberArray])
    }

    // numberArray.push(number)
    // numberArray.join(<br />)
  }

  const getNumberLength = () => {
    setUniqueNumberArray(
      numberArray.map(num => {
        if (!numberArray.includes(num)) {
          console.log(num)
          return num
        }
      })
    )

    //console.log(uniqueNumberArray)
    return uniqueNumberArray.length

    //eturn numberArray.length
  }

  const onSubmit = e => {
    e.preventDefault()
    getNumberLength()
  }

  const numbersRendered = numberArray.map(num => (
    <p className="card-text">{num}</p>
  ))

  return (
    <div>
      <div className="card">
        <h1>The Numbers Game ({getNumberLength})</h1>
        <p className="card-text">{getNumberLength} unique numbers</p>
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
