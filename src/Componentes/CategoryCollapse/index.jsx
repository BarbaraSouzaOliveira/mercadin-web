import React, { useState } from 'react';
import './index.css';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import ItemCard from '../ItemCard'

export default function CategoryCollapse({categoryName, categoryId}) {
  /*
    getProductsBycategory
    parametro-> idCategory
    Retorno -> array de objetos produtos que pertence aquela categoria
    produto-> id; name; price; img; avaibility;
  */
  const [isOpen, setIsOpen] = useState(false);
  const testProduct = [{
    name: 'Pão Frances',
    price: 20
    },
    {
      name: 'Pão de Queijo',
      price: 30
    },
    {
      name: 'Biscoito de chocolate',
      price: 43.79
    },
    {
      name: 'Casadinho',
      price: 34.40
    },
    {
      name: 'Pão de Queijo',
      price: 30
    },
    {
      name: 'Biscoito de chocolate',
      price: 43.79
    },
    {
      name: 'Casadinho',
      price: 34.40
    },
    {
      name: 'Pão de Queijo',
      price: 30
    },
    {
      name: 'Biscoito de chocolate',
      price: 43.79
    },
    {
      name: 'Casadinho',
      price: 34.40
    },
    {
      name: 'Pão de Queijo',
      price: 30
    },
    {
      name: 'Biscoito de chocolate',
      price: 43.79
    },
    {
      name: 'Casadinho',
      price: 34.40
    },
  ]
  return (
    <div>
        <div className='header-collapse'> 
            {isOpen ? (<ExpandLessIcon 
                          data-testid='expand-less-icon'
                          className='open-colapse' 
                          onClick={() => setIsOpen(false)} />
                      )
            : (<ExpandMoreIcon
                data-testid='expand-more-icon'
                className='close-colapse' 
                onClick={() => setIsOpen(true)} />
              )
            }
            <h2>{categoryName}</h2>
        </div>
        { isOpen &&
        <Grid container spacing={0} className='content-collapse'>
          {testProduct.map((product) =>
            <ItemCard 
              data-testid='item-colapse'
              prductName= {product.name}
              price= {product.price}
            />
          )}
            
        </Grid>
        }
    </div>
  );
}