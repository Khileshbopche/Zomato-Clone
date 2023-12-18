import React from 'react'
import cd from './Images/food-2048x1366.jpg'
import './Card.css'

const Card = () => {
  return (
    <div>
        
        <div className='row'>
         <div className='col-lg-3'>
           <div className='img-card'>
              <img src={cd}/>
              <h5>order</h5> 
           </div>
         </div>

         <div className='col-lg-3'>
           <div className='img-card'>
              <img src={cd}/>
               <h5>order</h5> 
           </div>
         </div>

         <div className='col-lg-3'>
           <div className='img-card'>
              <img src={cd}/>
               <h5>order</h5> 
           </div>
         </div>
        
         <div className='col-lg-3'>
           <div className='img-card'>
              <img src={cd}/>
              <h5>order</h5> 
           </div>
         </div>

        </div>
    </div>
  )
}

export default Card