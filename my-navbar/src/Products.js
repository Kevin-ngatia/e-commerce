import React from 'react';
import './products.css';
import {Card,Form,Button,Modal, Menu,MenuItem,popupState, Grid, Container} from '@mui/material'


function Products() {
    return (
       <div className='modal-container'>
           <label htmlFor="">Name<input type="text" placeholder='' /></label>
           <label htmlFor="">Email<input type="email" placeholder='name@gmail.com'/></label>
           <label htmlFor="">country<input type="text" placeholder='kenya'/></label>
           <label htmlFor="">verify email<input type="text" placeholder=''/></label>
           <button className='btn'>submit</button>
          
       </div>
       
       
    )
}

export default Products
