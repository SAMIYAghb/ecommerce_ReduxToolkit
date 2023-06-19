import React from 'react'
import './SubTilte.scss'

export const Subtitle = ({title}) => {
  return (
    <div className='main-content'>
        <div className="container py-4">
            <div className="content">
                    <div className="title-md py-2 px-4">
                         <h3 className='title'>{title}</h3>   
                    </div>

            </div>
            
        </div>
    </div>
  )
}
