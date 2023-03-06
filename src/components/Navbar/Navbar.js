import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <header>
      <div className='des'>
      <Link className='link' to="/">Home</Link>
      <Link className='link' to="/about">About</Link>
      <Link className='link' to="/syllabus">Syllabus</Link>
      <Link className='link' to="/materials">Materials</Link>
      </div>
      <div className='log'>
        <button>Signin</button>
        <button>Login</button>
      </div>
      </header>
    </div>
  )
}

export default Navbar
