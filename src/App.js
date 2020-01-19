import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Numbers from "./Components/Number.js"
import EvensOdds from "./Components/EvensOdds"

function App() {
  return (
    <div className="App">
      <Numbers />
      <EvensOdds />
    </div>
  )
}

export default App
