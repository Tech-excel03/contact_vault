import React from 'react'
import '../CSS/Contact_vault.css'

import logo from '../Assets/logo.png'

const NextPage = () => {
  return (
    <div className='next-page'>
      <div className='next-logo'>
        <img src={logo} alt="" />
        <h1>Contact Vault</h1>
      </div> 
      <p>Hello There Contact Vault Developers.</p>
    </div>
  )
}

export default NextPage
