import React from 'react'
import { Product } from './../Product/Product';
import './ProductList.scss'

export const ProductList = ({products}) => {
  
    
  return (
    <div className='products my-4'>
        <div className="product-lists grid ">    
            {
                products.map(product =>{
                    let discountPrice = (product.price)- (product.price * (product.discountPercentage / 100));
                    return(
                        <Product key = {product.id} product= {{...product, discountPrice}}/>
                    )
                })                 
            }
        </div>
    </div>
  
  )
}
