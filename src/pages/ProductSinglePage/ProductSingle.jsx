import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncProductSingle, getSingleProduct, getSingleProductStatus } from '../../store/ProductSlice';
import { STATUS } from './../../utils/status';
import { Laoder } from './../../components/Laoder/Laoder';
import { useParams } from 'react-router-dom';
import { formatPrice } from './../../utils/helpers';
import './ProductSingle.scss'
import { addToCard, setCartMessageOn, setCartMessageOff , getCartMessageStatus} from '../../store/cartSlice';
import CartMessage from './../../components/CartMessage/CartMessage';



export default function ProductSingle() {

  const [quantity, setQuantity] = useState(1)

  const {id} = useParams()
  // console.log(id);
  const dispatch = useDispatch()
  const product = useSelector(getSingleProduct)
  // console.log(product);
  const productSingleStatus = useSelector(getSingleProductStatus)
  // console.log(productSingleStatus);
  const cartMessageStatus = useSelector(getCartMessageStatus);
  
 // getting single product
  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));

    if(cartMessageStatus){
      setTimeout(()=>{
        dispatch(setCartMessageOff())
      }, 2000)
    }
  }, [cartMessageStatus]);

  let discountedPrice = (product?.price)- (product?.price * (product?.discountPercentage / 100));
  
  if(productSingleStatus === (STATUS.LOADING)){
    return <Laoder/>
  }

  const increase =()=>{
    setQuantity((prevQty)=>{
      let tempQty = prevQty + 1;
      if(tempQty > product?.stock) tempQty = product?.stock; //stocklimit
      return tempQty
    })
  }
  const decrease =()=>{
    setQuantity((prevQty)=>{
      let tempQty = prevQty - 1;
      if(tempQty < 1) tempQty = 1; //min quantity:1
      return tempQty
    })
  }

  const addToCardHandler =(product)=>{
    let discountedPrice = (product?.price) - (product?.price * (product?.discountPercentage / 100));
    
    let totalPrice = quantity * discountedPrice;

    dispatch(addToCard({...product, quantity:quantity, discountedPrice, totalPrice }))
    dispatch(setCartMessageOn(true))
  }


  return (
    <div className='product-single '>
      <div className="container">
        
        <div className="prod-content flex justify-between align-center my-5">
          
          <div className="py-2 px-2 ">
              <div className="prod-img">
                  <img src={product? (product.images ? product.images[0]: ""):"1"} alt ='' className="image-prod" />
              </div>
              <div className="mini-images flex justify-between align-center">
                <div className="mini-img-box">
                    <img src={product? (product.images ? product.images[1]: ""):"1"} alt ='' className="image-mini" />
                </div>
                <div className="mini-img-box">
                <img src={product? (product.images ? product.images[2]: ""):"1"} alt ='' className="image-mini" />
                </div>
                <div className="mini-img-box">
                <img src={product? (product.images ? product.images[3]: ""):"1"} alt ='' className="image-mini" />
                </div>
                <div className="mini-img-box">
                <img src={product? (product.images ? product.images[4]: ""):"1"} alt ='' className="image-mini" />
                </div>
              </div>
              
          </div>
          
          <div className="prod-detail">
            <h3 className='prod-title'>{product.title}</h3>
            <p>{product.description}</p>
            <div className="price">
              <p className='old-price text-gray'>{formatPrice(product?.price)}</p>
              <span className='discount bg-orange fs-13 text-white fw-6 px-2'>{product?.discountPercentage}% OFF</span>
              <p className='price fs-24'>{formatPrice(discountedPrice)}</p> 
            </div>
            
            <div className="quantity flex align-cente">
              <span>Quantity:</span>
              <div className='qty-change flex align-center mx-3'>
                    <button onClick={()=>decrease()} type = "button" className='qty-decrease'>
                      <i className='fas fa-minus'></i>
                    </button>
                    <div className = "qty-value mx-3"> {quantity }</div>
                    <button onClick={()=>increase()} type = "button" className='qty-increase ' >
                      <i className='fas fa-plus'></i>
                    </button>
              </div>
            </div>
            <div className="btns  flex align-center " >
              <button onClick={()=>{addToCardHandler(product)}} className=' btn1 px-1'>Add To Cart</button>
              <button className='btn2'>Buy Now</button>
            </div>
          </div>


        </div>
      </div>
      {cartMessageStatus && <CartMessage/>}
    </div>
  )
}
