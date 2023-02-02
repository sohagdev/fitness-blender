import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Logo.png'
export class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </nav>
    )
  }
}

export default Navbar
