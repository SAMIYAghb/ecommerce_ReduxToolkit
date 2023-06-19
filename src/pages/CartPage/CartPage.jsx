import React from 'react'
import './cartPage.scss'
import { useSelector, useDispatch } from 'react-redux'
import { shopping_cart} from '../../utils/images'
import { Link } from 'react-router-dom';
import { formatPrice } from './../../utils/helpers';
import { getAllCarts, removeFromCart, toggleCartQty, clearCart, getCartTotal } from '../../store/cartSlice';



export default function CartPage() {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts)
  // console.log(carts);
  const { itemsCount, totalAmount} = useSelector((state) => state.cart);
console.log(totalAmount);
  if(carts.length === 0){
    return(
      <div className="container">
        <div className="flex justify-center align-center flex-column">
          <img src={shopping_cart} alt="shopping_cart" />
          <span>Your Shopping cart is empty.</span>
          <Link to='/' className='bg-orange text-white fw-5'>Go shopping now</Link>
        </div>
      </div>
    )
  }


  return (
    <div className="cart-page ">
        <div className='container py-5 '>
          <div className="heade bg-white my-3 flex justify-between align-center px-2 py-2">
            <div className="id">Id</div>
            <div className="product-name">Product</div>
            <div className="price-u">Price</div>
            <div className="quantity">Quantity</div>
            <div className="total-price">Totale Price</div>
            <div className="actions">Actions</div>
          </div>

            {carts.map((cart, index)=>{
              return(
                <div key={cart.id} className="body  bg-white  my-3  px-2 py-2">
              <div className="content-body py-3 flex justify-between align-center">            
              
                    <div className="id">{index + 1}</div>
                    <div className="product-name">{cart?.title.split(" ").splice(0,2).join(" ")}</div>
                    <div className="price-u">{formatPrice(cart?.discountedPrice)}</div>

                    <div className="quantity">
                    <button type = "button" onClick={() => dispatch(toggleCartQty({id: cart?.id, type: "DEC"}))}>
                    <i className='fas fa-minus'></i>
                    </button>

                      <span className='px-2'>{cart?.quantity}</span>

                      <button type = "button" onClick={() => dispatch(toggleCartQty({id: cart?.id, type: "INC"}))}>
                      <i className='fas fa-plus'></i>
                      </button>
                      
                      </div>

                    <div className="total-price">{formatPrice(cart?.totalPrice)}</div>
                    <button onClick={() => dispatch(removeFromCart(cart?.id))} className="actions btn ">Delete</button>
              </div> </div>)
            })}
            
          <div className='foot bg-white  my-3  flex justify-between align-center px-2 py-2'>
            <button onClick={() => dispatch(clearCart())} className="btn clear">Clear Cart</button>
            <div className="">
              <p className='my-2'>Total ({itemsCount}) items: <span className='text-orange'>{formatPrice(totalAmount)}</span></p>
              
            </div>
          </div>
        </div>
    </div>
  )
}
