import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/home.jsx"
import Cart from "./pages/Cart/cart.jsx"
import PlaceOder from "./pages/Place-Oder/placeOder.jsx"
import Loginpoppup from './components/loginpopup/Loginpoppup';
import Verify from './pages/Verify/Verify.jsx';
import MyOrders from './pages/MyOrders/MyOrders.jsx';

const App = () => {

 const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<Loginpoppup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
     <Navbar setShowLogin={setShowLogin}/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/order' element={<PlaceOder/>} />
      <Route path='/verify' element={<Verify/>} />
      <Route path='/myorders' element={<MyOrders/>} />
     </Routes>
    </div>
       <Footer/>
    </>
    
  )
}

export default App;