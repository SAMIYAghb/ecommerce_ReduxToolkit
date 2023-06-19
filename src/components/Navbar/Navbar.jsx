import React,{useEffect} from 'react';
import './Navbar.scss'
import { Link } from 'react-router-dom';
import { setSidebarOn } from '../../store/sidebarSlice';
import { useSelector, useDispatch } from 'react-redux';
// import { getSidebarStatus } from './../../store/sidebarSlice';
import { getAllCategories, fetchAsyncCategories } from './../../store/categorySlice';
import Sidebar from './../Sidebar/Sidebar';
// import CartPage from './../../pages/CartPage/CartPage';

import { getAllCarts, getCartItemsCount, getCartTotal } from '../../store/cartSlice';
import CartModal from './../CartModal/CartModal';




export const Navbar = () => {
    const dispatch = useDispatch();
    // const temp = useSelector(getSidebarStatus);
    // console.log(temp);
    
    const categories = useSelector(getAllCategories);
    // console.log(categories);
    
    const carts = useSelector(getAllCarts)
    // console.log(carts);
    const itemsCount= useSelector(getCartItemsCount);
    // console.log(itemsCount);

    useEffect(() => {
        dispatch(getCartTotal());
      }, [carts])

  return (
    <>   
    <div className="navbar py-2  bg-light-orange fs-14">
        <div className="container">
            <div className="nav flex align-center justify-between">
                    <div className="nav-left flex align-center justify-between">
                            <div className="toggle">                      
                                <button onClick={()=>dispatch(setSidebarOn())} 
                                 className='sidebar-show-btn text-white'>
                                    <i className="fa-solid fa-bars"></i>
                                </button>
                            </div>
                            <div className="logo">
                                <Link to='/' >
                                <i className="fa-solid fa-bag-shopping"></i>
                                <span className='fs-18 fw-8'> Shop</span><span className='fs-18'>Up.</span>
                                </Link>                               
                            </div>
                    </div>
                    <div className="nav-right flex-column ">
                        <div className="search  ">
                            <div className="search-form flex align-center justify-between">
                                    <input className='fs-11 py-1 form-control ' type="text"
                                     placeholder='Search your prefferred items here'/>
                                    <Link to='' className='bg-light-orange search-btn'>
                                        <i className='fa-solid fa-magnifying-glass'></i>
                                    </Link>
                            </div>
                            <div className="cart-shop flex align-center">
                                <Link to='/cart'>
                                    <i className="fa-solid fa-cart-arrow-down"></i>     
                                
                                    <div className="cart-item-value">
                                        <span>{itemsCount}
                                        </span>
                                        <CartModal carts = {carts} />
                                    </div> 
                                </Link>     
                            </div>
                            
                        </div>
                        {/* taking 8 categories only */}
                        <div className="link">
                            <ul className=' flex align-center justify-between py-1'>
                                {
                                    categories.slice(0,8).map((category, index)=>(
                                        <li key={index}><Link to={`/category/${category}`}  >{category.replace("-", " ")}</Link></li>
                                    ))
                                }
                              
                        
                            </ul>
                        </div>
                        
                    </div>
            </div>
            
        </div>
    </div>
    <Sidebar/>
    </>
  )
}



