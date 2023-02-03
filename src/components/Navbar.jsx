import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo.png'
const Navbar = () => {
  return (
    <nav>
      <Link to='/'>
        <img src={logo} alt='logo' />
      </Link>
    </nav>
  )
}

export default Navbar
