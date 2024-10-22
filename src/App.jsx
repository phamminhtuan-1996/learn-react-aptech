import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListUser from './ListUser';
import InputFieldText from './components/InputFieldText';
function App() {
  return (
    <>
      <InputFieldText/>
      <ListUser />
    </>
  )
}

export default App
