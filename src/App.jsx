import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListUser from './ListUser';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListUser />
    </>
  )
}

export default App
