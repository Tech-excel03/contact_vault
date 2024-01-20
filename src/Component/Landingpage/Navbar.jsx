import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { Outlet, Link, } from 'react-router-dom'


function Navbar() {
  return (
    <div className='nav-action'>
        <div className='logo'>
            <img src={logo}/>
        </div>
        <div className='Nav-control'>
            <ul>
                <li>
                    <span>Home</span>
                </li>
                <li>
                    <span>Menu</span>
                </li>
                <li>
                    
                    <Link to='/Form'>Login</Link>
                </li>
                <li>
                    <input type='text' placeholder='search' required/>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar