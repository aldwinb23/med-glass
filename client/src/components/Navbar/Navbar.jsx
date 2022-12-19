import React from 'react'
import './Navbar.css'
import images from '../../constants/images'

function Navbar() {
  return (
    <div className='navbar__container'>
    <div><img className='navbar__logo' src={images.medlogo} /></div>
    </div>
  )
}

export default Navbar