import React, { useState } from 'react'
import NextPage from '../Next/NextPage'
import ForgetPassword from '../Forget/ForgetPassword'
import Newuser from '../Newuser/Newuser'
import Welcome from './Welcome'
import { Link, } from 'react-router-dom'

import '../CSS/Contact_vault.css'



const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear the error message when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!formData.username) {
      errors.username = 'Username is required';
    }
 
    if (!formData.password) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length === 0) {
      // Proceed with login
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className='Login-form'>
      <form id='formData' onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td className='section_heading' colSpan={2}>
                Login
              </td>
            </tr>
            <tr>
              <td className='label_col'>
                <label htmlFor="username">Username</label>
              </td>
              <td className='input_col'>
                <input
                  type='text'
                  className='input-control1'
                  placeholder='Username'
                  id='username'
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                {errors.username && <span>{errors.username}</span>}
              </td>
            </tr>
            <tr>
              <td className='label_col'>
                <label htmlFor="password">Password</label>
              </td>
              <td className='input_col'>
                <input
                  type='password'
                  className='input-control2'
                  placeholder='********'
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <span>{errors.password}</span>}
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <input type='checkbox' id='remember_me' />
                <label htmlFor="remember_me">Remember me</label>
              </td>
            </tr>
            <tr className='button_row'>
              <td className='button_row'>
                <button className='btn-clear' type='button' onClick={() => setFormData({ username: '', password: '' })}>Clear</button>
              </td>
              <td className='button_row'>
                <button className='btn-submit' type='submit'>Login</button>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                New user&nbsp;
                <Link to='/Newuser'><a href='#'>Enroll here</a></Link>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                Existing user&nbsp;
                <Link to='/ForgetPassword'><a href='#'>Forget username/password</a></Link>
              </td>
            </tr>
           
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Login;
