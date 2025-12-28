import React from 'react'
import { useState } from 'react';
import './App.css'
import About from './component/About'
import Contact from './component/Contact'
import Home from'./component/Home'
import Services from'./component/Services'
import { Route,Link, Routes } from 'react-router-dom';
function App() {
   
  return (
    <>
    <nav className='nav'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Services">Services</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Services" element={<Services/>} />
    </Routes>
    </>
    
  )
}

export default App
