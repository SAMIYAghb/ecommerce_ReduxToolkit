import React from 'react'
import './Product.scss' 
import { formatPrice } from './../../utils/helpers';
import { Link } from 'react-router-dom';



export const Product = ({product}) => {
    // console.log(product);
  return (
    <>
    <Link to={`/product/${product?.id}`} key = {product?.id}>
    <div className="prod-card bg-white  text-center">
        <div className='category '>{product?.category}</div>
        <div className="product-img">
              <img className='img-cover' src = {product?.images[0]} alt = {product.title}/>
        </div>
        <div className="product-details">
              <div className='brand'>
                  <span className='fs-11'>Brand: </span>
                  <span className='fw-3 fs-14'>{product?.brand.split(" ").splice(0,2).join(" ")}</span>
                </div>
              </div>
              <div className='title py-2 fw-5 fs-17'>
                  {product?.title.split(" ").splice(0,2).join(" ")}
              </div>
              <div className="price flex align-center justify-between px-4 fs-11">
                  <div className="init-price fs-14">
                    {product?.price}
                  </div>
                  <div className="price-afer-sale fs-17">
                      {formatPrice(product?.price)}
                  </div>
                  <div className="dicscount fs-14 ">
                   ({product?.discountPercentage}% Off)
                  </div>
                 
              </div>
              

    </div>
    </Link>
    
 
    </>
  )
}
