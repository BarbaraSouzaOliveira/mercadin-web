import * as React from 'react';
import './index.css';
import Avatar from '@mui/material/Avatar';

export default function Home() {
  return (
    <nav className='navbar-supermarket'>
        <div><h1>Mercad-In</h1></div>
        <div className='profile'>
            <h4>Supermecado BH</h4>
            <Avatar alt="Cindy Baker" />
        </div>
    </nav>
  );
}