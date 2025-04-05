import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='flex justify-between p-6 bg-gradient-to-r from-black to-[#180202] text-white max-h-[70px]'>
      <div className='flex justify-betwen'>
        <img 
        src="movie.png"
        alt="Movie Hub Logo"
        className='w-15 h-15 rounded-xl'
        />
        <h1 className='ml-4 mt-2 text-2xl font-bold font-bebas text-white'>Movie Hub</h1>
      </div>
      <nav className='flex space-x-10'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/genre">Genre</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/shows">TV Shows</NavLink>
      </nav>
    </div>
  );
}

export default Header;
