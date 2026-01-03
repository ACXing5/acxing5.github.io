import { useState } from 'react'
import eloCalcLogo from '/EloCalc.svg'
import baaaLogo from '/BloodborneAAA.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>ACXing5's Projects</h1>
      <div>
        <a href="https://acxing5.github.io/EloCalc/" target="_blank">
          <img src={eloCalcLogo} className="logo" alt="Elo Calc logo" />
        </a>
        <a href="" target="_blank">
          <img src={baaaLogo} className="logo" alt="Bloodborne AAA Discord Bot logo" />
        </a>
      </div>
    </>
  )
}

export default App
