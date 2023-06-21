import * as React from 'react';
import './index.css';
import Avatar from '@mui/material/Avatar';

export default function Home() {
  const handleLogout = () => {
    localStorage.setItem('logado', false)
    window.location.href = '/'
  }

  return (
    <nav className='navbar-supermarket'>
        <div><h1>Mercad-In</h1></div>
        {localStorage.getItem('logado') &&
        <div className='profile'>
            <h4>Supermecado</h4>
            <Avatar alt="Cindy Baker" />
            <span onClick={() => handleLogout()} style={{cursor: 'pointer'}}>Sair</span>           
        </div>}
    </nav>
  );
}