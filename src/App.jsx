import { useState } from 'react'
import './App.css'
import RoutesComponent from './components/RoutesComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RoutesComponent/>
    </>
  )
}

export default App
