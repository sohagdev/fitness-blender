import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo.png'
const Navbar = () => {
  return (
    <nav className='flex md:justify-start justify-around content-none flex-row xs:gap-24 sm:gap-52'>
      <Link to='/'>
        <img src={logo} alt='logo' className='w-18 h-16 mb-3' />
      </Link>
      <div className='links flex direction-row gap-5 text-xl items-center'>
        <Link to='/' className='border-b-4 border-b-orange-600'>
          Home
        </Link>
        <a
          href='#exercise'
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          Exercises
        </a>
      </div>
    </nav>
  )
}

export default Navbar
