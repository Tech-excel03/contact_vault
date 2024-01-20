import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import './Form.css';

function Form() {


  return (
    <div className='wrapper'>
        <form action=''>
            <h1>Login</h1>
            <div className='input-control'>
                <input type='text' className='Username' placeholder='username' required />
                <FaUser className ='icon' />

            </div>
            <div className='input-control'>
                <input type='password' className='password' placeholder='password' required />
                <FaLock className='icon'/>
            </div>
            <div className='forget-remember'>
                <label><input type='checkbox'/>remember Me</label>
                <a href='#'>Forget password</a>
            </div>

            <button type='submit'>Login</button>

            <div className='Register-Link'> 
            <p>Don't have an account?<a href='#'>Register Here</a></p>
            </div>
            
        </form>

    </div>
  )
}

export default Form