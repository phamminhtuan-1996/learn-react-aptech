import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import ProductSearch from "./pages/ProductSearch";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
export default function RoutesComponent() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home/>} />
                <Route path="category/:category_id" element={<Category/>} />
                <Route path="product/:product_id" element={<ProductDetails/>} />
                <Route path="cart" element={<Cart/>} />
                <Route path="search" element={<ProductSearch/>} />
            </Route>
            <Route path="checkout" element={<Checkout/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}