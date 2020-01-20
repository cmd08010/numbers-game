import React, { useState } from "react"
import Numbers from "./Number.js"

const EvensOdds = () => {
  console.log(Numbers.numberArray)
  return (
    <div>
      <div className="card">
        <h1>Evens ({Numbers.numberArray})</h1>
        <p className="card-text">{"hi"} unique numbers</p>
      </div>
      <div></div>

      <div className="card">{Numbers.numberArray}</div>
    </div>
  )
}

export default EvensOdds
