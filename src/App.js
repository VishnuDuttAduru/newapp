import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/cart/Cart.jsx";
import PlaceOrder from "./pages/placeOrder/PlaceOrder.jsx"

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<PlaceOrder />} />
      </Routes>
    </div>
  )
}

export default App
