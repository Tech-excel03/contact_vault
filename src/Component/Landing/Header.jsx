import React from 'react'
import logo from '../Assets/logo.png'
import '../CSS/Contact_vault.css'


function Header() {
  return (
   
        <div className='header_row'> 
        <h1>
            <img className='logo' src={logo} alt=""  />
            Contact Vault</h1>
           </div>

   
  )
}

export default Header