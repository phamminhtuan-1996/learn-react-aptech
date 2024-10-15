import { useState } from 'react'
import './App.css';
import Form from './components/Form';
import OptimizeForm from './components/OptimizeForm';

function App() {
  const [count, setCount] = useState(0);
  const handleIncreateman = () => {
    setCount(count + 1);
  }
  const handleAlpha = (number) => {
    setCount(() => count + number);
  }
  return (
    <>
        <h1>count: {count}</h1>
        <button className='btn btn-primary' onClick={handleIncreateman}>count</button>
        <button className='btn btn-primary' onClick={() => handleAlpha(2)}>alpha</button>
        {/* <Form/> */}
        <OptimizeForm/>
    </>
  )
}

export default App
