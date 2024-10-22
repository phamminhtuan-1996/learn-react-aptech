import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppContext from './utils/AppContext';

function App() { 
  const conText = useContext(AppContext)
  return (
    <>
      {conText.valueInput}
      <input type="text" onChange={(val) => {conText.setValueInput(val.target.value)}}/>
    </>
  )
}

export default App
