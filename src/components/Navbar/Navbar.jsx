import React from 'react'
import './Navbar.scss'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from '../../pages/Home';
import Portfolio from '../../pages/Portfolio';
import Contact from '../../pages/Contact';
import Notfound from '../../pages/Notfound';


export default function Navbar() {
  return (
    <div className='container'>
    <BrowserRouter>
    <header>
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
    </header>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
  </div>
  )
}
