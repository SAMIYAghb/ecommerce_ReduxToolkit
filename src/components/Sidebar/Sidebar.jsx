import React ,{useEffect} from 'react'
import './Sidebar.scss'
import { useSelector, useDispatch } from 'react-redux';
import { getSidebarStatus,setSidebarOff } from './../../store/sidebarSlice';
import { getAllCategories, fetchAsyncCategories } from './../../store/categorySlice';
import { Link } from 'react-router-dom';




export default function Sidebar() {
    const dispatch = useDispatch();
    const isSidebarOn = useSelector(getSidebarStatus);
    const categories = useSelector(getAllCategories);

    useEffect(() => {
      dispatch(fetchAsyncCategories())
    }, [dispatch])
    

  return (
    <>
    <div className='sidebar'>
      <div className={`${isSidebarOn ? 'd-sidebar' : 'none'}`}>
        <button type="button" onClick={()=>dispatch(setSidebarOff())} className='hide-btn'><i className="fa-solid fa-xmark close"></i></button>
           <h4 className="">All Categories</h4>
            
        <div className="content">
            <ul className='cat-list'>
            {
                categories.map((category, index)=>(
                    <li key={index}><Link to={`category/${category}`}className='cat-list-link text-capitalize'>
                        {category.replace("-", " ")}</Link></li>
                ))
            }
            </ul>
        </div>
            
      </div>
      

    </div>
    </>
  )
}
