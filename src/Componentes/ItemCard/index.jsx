import React, { useState } from 'react';
import './index.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import pao from '../../assets/img/pao.jpg'

export default function ItemCard({prductName, price}) {
  return (
    <div className='card-item'>
       <div className='header-card'>
        <DeleteForeverIcon aria-label="Delete"/>
        <EditIcon aria-label="Edit"/>
       </div>
       <div className='content-card'>
        <img  className='img-card' src={pao} alt="card-img"/>
       </div>
       <div className='footer-card'>
        <span>{prductName}</span>
        <span>R${parseFloat(price.toFixed(2))}</span>
       </div>
    </div>
  );
}