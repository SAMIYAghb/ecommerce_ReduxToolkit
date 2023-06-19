import React from 'react'
import './Laoder.scss'
import { loader } from './../../utils/images';



export const Laoder = () => {
  return (
    <div className='container'>
       <div className="m-auto">
          <img className='loader' src={loader} alt="loader" />
       </div>
    </div>
  )
}
