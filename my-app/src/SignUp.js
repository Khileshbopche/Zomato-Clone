import React from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'
import Home from './Home'
const SignUp = () => {
  return (
    <div>
      <h1>SignUp</h1>
      <div className='sign'>
      <div>
        <label for='frist'>First Name</label>
        <input id='frist' type='text' placeholder='First Name'/><br/>

        <label for='last'>Last Name</label>
        <input id='last' type='text' placeholder='Last Name'/><br/>

        <label for='email'>Email</label>
        <input id='email' type='email' placeholder='Enter your email'/><br/>

        <label for='mob'>Mob. Number</label>
        <input id='mob'  type='number'  placeholder='Mobile Number'/><br/>

        <label for='pas'>Password</label>
        <input id='pas' type='password' placeholder='Password'/><br/>

        <h4 id='singup'><Link to='/'>SignUp</Link></h4>
        
        
      </div>
      </div>
      
    </div>
  )
}

export default SignUp