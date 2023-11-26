import React from 'react'
import navlogo from './navlogo.jpg'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar bg-body-tertiary" style={{ width: '100%' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={navlogo} alt="Logo" width="80" height="75" className="d-inline-block align-text-top"/>
          </a>
          <div className="d-flex">
            <button className="btn btn-secondary me-2" type="button" style={{ outline: 'none' }}>About Us</button>
           <Link to="/signup"> <button className="btn btn-secondary" type="button" style={{ outline: 'none' }}>Sign Up</button></Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
