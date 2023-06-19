import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer py-4 '>
      <div className="container">

        <div className="content flex justify-between align-center">
          <Link to='/' >Privacy policy</Link>
          <Link to='/'>Terme of service</Link>
          <Link to='/'>About ShopUp</Link>
          <span>2023 @ SAMIYA BRD</span>
        </div>
      </div>
    </div>
  )
}

export default Footer