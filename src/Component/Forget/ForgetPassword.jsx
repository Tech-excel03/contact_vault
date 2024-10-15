import React from 'react'
import '../CSS/Contact_vault.css'
import logo from '../Assets/logo.png'
import  Footer  from '../Landing/Footer'
import Header from '../Landing/Header'

function ForgetPassword() {
  return (
    <div className='forget-password'>
       <form>
          <table>
       <tr>
          <td className='header_row' colSpan={2}>
            <Header />
          </td>
          </tr>
          <tr>
            <td className='section_heading' colSpan={2} >
           Forget Password              
            </td>
          </tr>                      
            <tr>
            <td className='label_col'>
              <label htmlFor="email_or_username"> Email or Username </label>
            </td>
           
            <td className='input_col'>
                <input type='text' className='' placeholder=' Email or Username' id='email_or_username' required/>
               </td>
               </tr>
               <tr>
               <td className='label_col'>
                 <label htmlFor="new_password">New Password</label>
            </td>
            <td className='input_col'>
                <input type='password' className='' id='new_password' placeholder='' required />
            </td>
            </tr>
            <tr>
            <td className='label_col'>
                <label htmlFor="confirm_password">Confirm Password</label>
            </td>
            <td className='input_col'>
                <input type='password' className='' placeholder='' id='confirm_password' required/>
            </td>
            </tr>
            <tr>
              <td className='button_row' colSpan={2}>
                <button className='btn-submit' type='submit'>Submit</button>
                </td>
            </tr>
            <tr>
          <td className='footer_row' colSpan={2}>
            <Footer />
          </td>
          </tr>
            </table>   
        </form>
    </div>
  )
}
export default ForgetPassword