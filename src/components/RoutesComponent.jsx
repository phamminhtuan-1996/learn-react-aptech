import {
    Route, Routes
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Notfound from './pages/Notfound';
import Layout from './pages/Layout';

export default function RoutesComponent() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}></Route>
            <Route index element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/product/:id" element={<Product/>} />
            <Route path="*" element={<Notfound/>} />
        </Routes>
    )
}