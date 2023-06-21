import React, { useState, useEffect} from 'react';
import './index.css';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import ItemCard from '../ItemCard';

export default function CategoryCollapse({categoryName, categoryId, products}) {
  const [isOpen, setIsOpen] = useState(false);
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
        <Grid container spacing={3} className='content-collapse'>
          {products.map((product) =>
            <Grid key={product.id} item spacing={3}>
              <ItemCard
                data-testid='item-colapse'
                name= {product.name}
                price= {product.price}
                description={product.description}
              />
            </Grid>
          )}
            
        </Grid>
        }
    </div>
  );
}