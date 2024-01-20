import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Cart() {
  return (
    <div className='container'>
    <Navbar />
    <div className='empty-cart-container'>
    <div className='empty-cart'>
      <img src="./empty-cart.jpg" alt="cartImage" />
    </div>
    <p>Looks like you have not added anything in your cart.
      Go ahead and explore top products.</p>
    <Link to={"/"} className="btn">Continue Shopping</Link>
    </div>
    </div>
  )
}

export default Cart