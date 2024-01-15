import React from 'react'

function CartItem({ item }) {
  return (
    <div className='cart-container border-bottom'>
        <div className='cart-img'>
          <img src={item.product.image} alt={item.product.title} />
        </div>
        <div>
          <div>
            <h5>{item.product.title}</h5>
            <h5>Price &#x24;{item.product.price}</h5>
          </div>
          <div className='delete-container'>
            <img className='delete-icon' src="./delete.png" alt="deleteIcon" />
            <div>
              <span className='cart-btn'>+</span>
              <span>{item.count}</span>
              <span className='cart-btn'>-</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CartItem