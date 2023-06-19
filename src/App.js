
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import {createBrowserRouter,RouterProvider} from "react-router-dom";
// import Layout from './components/Layout';




import { store } from './store/store';
import { Provider } from 'react-redux';
// pages
// import {Home, CategoryProduct, ProductSingle, Cart, Search} from "./pages/index";
import HomePage from './pages/HomePage/HomePage';
import ProductSingle from './pages/ProductSinglePage/ProductSingle';
import CategoryProduct from './pages/CategoryProductPage/CategoryProduct';
import Search from './pages/SearchPage/Search';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
// import CartModal from './components/CartModal/CartModal';
import CartPage from './pages/CartPage/CartPage';




function App() {
                                                            
  return (
  
 <div className='App'>
          <Provider store={store}>
              <BrowserRouter>
              <Header/>
              
                 <Routes>
                  <Route path="/" element={<HomePage/>}></Route>
                  <Route path="/product/:id" element={<ProductSingle/>}></Route>
                  <Route path="/category/:category" element={<CategoryProduct/>}></Route>
                  <Route path="/search/:searchTerm" element={<Search/>}></Route>
                  {/* <Route path="/cart" element={<CartModal/>}></Route> */}
                  <Route path="/cart" element={<CartPage/>}></Route>
                  
                 </Routes>
             <Footer/>   
                                                                     
             </BrowserRouter> 
          </Provider> 
        
</div>
  );
}

export default App;
