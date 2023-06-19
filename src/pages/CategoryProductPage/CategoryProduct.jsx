import React, {useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllProductsByCategory, fetchAsyncProductsOfCategory, getCategoryProductsStatus } from '../../store/categorySlice';

import { STATUS } from '../../utils/status';
import { Laoder } from './../../components/Laoder/Laoder';
import { ProductList } from './../../components/ProductList/ProductList';



const CategoryProductPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const categoryProducts = useSelector(getAllProductsByCategory);
  const categoryProductsStatus = useSelector(getCategoryProductsStatus);

  useEffect(() => {
    dispatch(fetchAsyncProductsOfCategory(category));
  }, [dispatch, category]);

  return (
    <div className='cat-products py-5 bg-whitesmoke'>
      <div className='container'>
        <div className='cat-products-content'>
          <div className='title-md'>
            <h3>See our <span className='text-capitalize'>{category.replace("-", " ")}</span></h3>
          </div>

          {
            categoryProductsStatus === STATUS.LOADING ? <Laoder /> : <ProductList products = {categoryProducts} />
          }
        </div>
      </div>
    </div>
  )
}

export default CategoryProductPage