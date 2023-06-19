import React from 'react';
import { Navbar } from '../Navbar/Navbar';
// import { Link } from 'react-router-dom';
import './Header.scss'

export const Header = () => {
  return (
    <>
    <div className="header bg-light-orange py-2 fs-14">
      <div className="container">
        <div className="header-content  flex align-center justify-between">
            <div className="header-left">
            <ul className='  flex align-center justify-between py-1'>
              <li>
              {/* <Link to = "/seller">Seller Center</Link> */}
                Seller Center</li>
              <li>Download</li>
              <li>Follow us on <i className="fa-brands fa-facebook px-1"></i><i className="fa-brands fa-square-instagram"></i></li>
            </ul>
            </div>
            <div className="header-right">
              <ul className='flex align-center justify-between'>
                <li><i className="fa-solid fa-circle-question"></i> Support</li>
                <li>Register</li>
                <li>Login</li>
              </ul>
            </div>
        </div>
          
      </div>
    </div>
    <Navbar/>
    </>
  )
}
