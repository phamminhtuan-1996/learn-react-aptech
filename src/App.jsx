import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import RoutesComponent from './components/RoutesComponent';
import {Link, Route, Routes,} from 'react-router-dom';
import RoutesComponent from './components/RoutesComponent';
import Layout from './components/pages/Layout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <ul className='d-flex list-style-none'>
          <li className='me-4 d-block'><Link to="/"> Home </Link></li>
          <li className='me-4 d-block'> <Link to="/about"> About </Link></li>
          <li className='me-4 d-block'><Link to="/contact"> Contat </Link></li>
        </ul>
      </nav>
      <ul>
        <li><Link to="/product/1"> sản phẩm 1 </Link></li>
        <li><Link to="/product/2"> sản phẩm 2 </Link></li>
        <li><Link to="/product/3"> sản phẩm 3 </Link></li>
      </ul>
     <RoutesComponent/>
     <Layout/>
    </>
  )
}

export default App
