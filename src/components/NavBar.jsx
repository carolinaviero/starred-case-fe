import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = ({ numberOfFavoriteJobs }) => (
    <div className='navbar'>
      <Link to='/login'>Login</Link>
      <Link to='/'>Home</Link>
      <Link to='/favorites'>Favorites {numberOfFavoriteJobs > 0 ? `(${numberOfFavoriteJobs})` : ''}</Link>
    </div>
  );