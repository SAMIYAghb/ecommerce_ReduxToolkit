import React from 'react'
import { correct } from '../../utils/images'
import './CartMessage.scss'


const CartMessage = () => {
  return (
    <div className='cart-message text-center'>
      <div className="cart-message-icon">
        <img src={correct} alt="" />
      </div>
      <p className=''>An item has been addes to your shopping cart</p>
    </div>
  )
}

export default CartMessage