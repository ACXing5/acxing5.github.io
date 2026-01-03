import { useState } from 'react'
import eloCalcLogo from '/EloCalc.svg'
import baaaLogo from '/BloodborneAAA.svg'
import publicDatabase from '/PublicDatabase.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>ACXing5's Projects</h1>
      <p>
        Check my GitHub <a href="https://github.com/ACXing5" target="_blank" rel="noreferrer">
          here
        </a>
      </p>

      <div>
        <a href="https://acxing5.github.io/EloCalc/" target="_blank">
          <img src={eloCalcLogo} className="logo" alt="Elo Calc logo" />
        </a>
        <a href="https://top.gg/bot/1325883848688533594" target="_blank">
          <img src={baaaLogo} className="logo" alt="Bloodborne AAA Discord Bot logo" />
        </a>
        <a href="https://acxing5.github.io/Public-Database/" target="_blank">
          <img src={publicDatabase} className="logo" alt="Public Database logo" />
        </a>
      </div>
    </>
  )
}

export default App
