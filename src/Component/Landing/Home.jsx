import React from 'react'
import Header from './Header'
import Login from '../form/Login'
import '../CSS/Contact_vault.css'
import  Footer  from './Footer'



function Home() {
  return (
    <div className='container'>
      <table>
        <tr>
          <td className='header_row' colSpan={2}>
            <Header />
          </td>
        </tr>
        <tr>
          <td>
          <div>
            <span className='sub_heading'>Contact vault is centralize platform to securelt store your contact informarion
            and enable business to fetch the required information on demand</span>

            <ul className='sub_heading'>Goals</ul>
   
            <li>create a centralized vault to record the customer contact information </li>
            <li>Develop a userinterface to manage customer contact information</li>
            <li>provide a secure service to share customer contact informarion</li>
            <li>Design a robust and scalable platform to support growing customer & consumer base</li>
          </div>
          </td>
          <td>
            <Login />
          </td>
        </tr>
        <tr>
          <td className='footer_row' colSpan={2}>
            <Footer />
          </td>
        </tr>
      </table>                                     
    </div>
  )
}

export default Home