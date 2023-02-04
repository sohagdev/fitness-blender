import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo.png'
const Navbar = () => {
  return (
    <nav className='py-5'>
      <Link to='/'>
        <img
          src={logo}
          alt='logo'
          style={{ width: '48px', height: '48px', margin: '0 20px' }}
        />
      </Link>
    </nav>
  )
}

export default Navbar
