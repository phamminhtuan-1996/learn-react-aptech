import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './InputField'
import PickColor from './PickColor'
import TableUser from './TableUser';

function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)
  const [valueInput, setValueInput] = useState('Vite + React');
  useEffect(() => {
    if (count >= 10000000000) {
      return;
    }
    setCount(count + 5000)
  },[number])
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{valueInput}</h1>
      <div className="card">
        <InputField onInputField={(value) => {
          setValueInput(value)
        }}/>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
          <button onClick={() => { setNumber(number + 1) }}>set number thì count phải chạy</button>
        </p>
      </div>
      b
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PickColor/>
      <TableUser/>
    </>
  )
}

export default App
