import React from 'react'
import {useEffect} from 'react'
import  './HomePage.scss';
// import { Subtitle } from '../../components/SubTitle/Subtitle';
import { ProductList } from '../../components/ProductList/ProductList';
// import { Product } from './../../components/Product/Product';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts, fetchAsyncPrducts, getAllProductsStatus  } from './../../store/ProductSlice';
import { getAllCategories } from './../../store/categorySlice';
import { Laoder } from './../../components/Laoder/Laoder';
import { STATUS } from './../../utils/status';
import Footer from './../../components/Footer/Footer';
import { HeaderSlider } from './../../components/Slider/HeaderSlider';



const HomePage = () => {
  const dispatch =  useDispatch()
  const products = useSelector(getAllProducts)
  // console.log(products);
  const categories = useSelector(getAllCategories)
  const productsStatus = useSelector(getAllProductsStatus)


useEffect(() => {
  dispatch(fetchAsyncPrducts(50))
}, [dispatch])


// render productss in list
// const tempProducts = [];
// pour obtenir an array avec des products  aléatoirement

// if(products.length > 0){
//   for(let i in products){
//     let randomIndex = Math.floor(Math.random() * products.length);

//     while(tempProducts.includes(products[randomIndex])){
//       randomIndex = Math.floor(Math.random() * products.length);
//     }
//     tempProducts[i] = products[randomIndex];
//   }
// }

//filter categories
let catProductOne = products.filter((product)=>(product.category === categories[0]))
let catProductTwo = products.filter((product)=>(product.category === categories[1]))
let catProductThree = products.filter((product)=>(product.category === categories[2]))
let catProductFour = products.filter((product)=>(product.category === categories[3]))
  
  return (
  <main>
      <HeaderSlider/> 
      {/* <Subtitle title='See our products'/> */}
      
      <div className="main-content">
          <div className="container">
            
            <div className="categories py-5 ">

              {/* <div className="categories-item">
                <div className="sub-title">
                    <h3>See our products</h3>
                </div>
                {
                    productsStatus === STATUS.LOADING ? <Laoder/> :

                    <ProductList products={tempProducts}/>
                }
              </div> */}

              <div className="categories-item">
                <div className="sub-title">
                      <h3>{categories[0]}</h3>
                </div>
                {
                    productsStatus === STATUS.LOADING ? <Laoder/> :

                    <ProductList products={catProductOne}/>
                }
              </div>

              <div className="categories-item">
                <div className="sub-title">
                      <h3>{categories[1]}</h3>

                </div>
                {
                    productsStatus === STATUS.LOADING ? <Laoder/> :

                    <ProductList products={catProductTwo}/>
                }
              </div>

              <div className="categories-item">
                <div className="sub-title">
                      <h3>{categories[2]}</h3>

                </div>
                {
                    productsStatus === STATUS.LOADING ? <Laoder/> :

                    <ProductList products={catProductThree}/>
                }
              </div>

              <div className="categories-item">
                <div className="sub-title">
                      <h3>{categories[3]}</h3>

                </div>
                {
                    productsStatus === STATUS.LOADING ? <Laoder/> :

                    <ProductList products={catProductFour}/>
                }
              </div>

            </div>
          </div>
      </div>
  </main>
    
   )
}

export default HomePage