import React from 'react'
import Header from '../Landing/Header'
import Country from './Country'
import State from './State'
import Footer from '../Landing/Footer'


function Newuser() {
  return (
    <table>
    <tr>
      <td className='header_row'>
        <Header />
      </td>
    </tr>
    <tr>
      <td>
      <div className='new-user'>                               
      <form>
        <table>
          <tr>
            <td className='section_header' colSpan={2}>
            Register Here
            </td>
          </tr>           
        <tr>
            <td className='label_col'>
            <label htmlFor='first_name'>First Name</label>
            </td>
            <td className='input_col'>
            <input type='text' id='first_name' className='input_field' placeholder='First Name' required/>
            </td>
          </tr>

          <tr>
            <td className='label_col'>
            <label htmlFor='middle_name'>Middle Name</label>
            </td>
            <td className='input_col'>
            <input type='text' id='middle_name' className='input_field' placeholder='Middle Name'/>
            </td>
          </tr>

          <tr>              
            <td className='label_col'>
            <label htmlFor='last_name'>Last Name</label>
            </td>
            <td className='input_col'>
            <input type='text' id='last_name' className='input_field' placeholder='Last Name' required/>               
            </td>
          </tr>

          <tr>
          <td className='label_col'>
            <label for="birthday">Birthday:</label>
            </td>
            <td className='input_col'>
            <input type="date" id="birthday" required ></input>
            </td>
          </tr>

          <tr>
          <td className='label_col'>
            <label htmlFor='phone_number'>Phone Number</label>
            </td>
            <td className='input_col'>
              <input type='tel' id='phone_number' className='input_field' placeholder='123-123-1234' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>                            
            </td>
          </tr>

          <tr>
          <td className='label_col'>
            <label htmlFor='email'>Email Addrress</label> 
              </td>
              <td className='input_col'>
              <input type='text' id='email' className='input_field' placeholder='Email' required/>
            </td>
          </tr>
          <tr>
          <td className='label_col'>
            <label htmlFor='website'>Website</label>
            </td>
            <td className='input_col'>
            <input type='text' id='website' className='input_field' placeholder='Website' />
            </td>
          </tr>

          <tr>
          <td className='label_col'>
            <label htmlFor='address_line1'>Address Line 1</label>
            </td>
            <td className='input_col'>
            <input type='text' id='address_line1' className='input_field' placeholder='' required/>
            </td>
          </tr>

          <tr>
          <td className='label_col'>
            <label htmlFor='address_line2'>Address Line 2</label>
            </td>
            <td className='input_col'>
            <input type='text' id='address_line2' className='input_field' placeholder='' />
            </td>
          </tr>
          <tr>
          <td className='label_col'>
            <label for='country'>Country</label>
            </td>
            <td className='input_col'>
              <Country />
             
           </td>            
          </tr>  

          <tr>
          <td className='label_col'>
            <label for ="state">State</label>
            </td>
            <td className='input_col'>
              <State/>                                
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type='submit' id ='register'>Register</button>        
            </td>
          </tr>            
          </table>                                                                                                
      </form>
      </div>       
      </td>
    </tr>
    <tr>
      <td className='footer_row'>
        <Footer />
      </td>
    </tr>
  </table>   
)
}
export default Newuser
 