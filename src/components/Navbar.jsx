import React from 'react'
import '../App.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
        <h1 className='bold logo'>Logo</h1>
        <ul className='nav-links'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
        </ul>
    </div>
  )
}
