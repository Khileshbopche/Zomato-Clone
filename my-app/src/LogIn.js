import React from 'react'
import { Link } from 'react-router-dom'

import './LogIn.css'
const LogIN = () => {
  return (
    <div>
      <div className='parent-log'>
      <div id='log'>
        <h1>LogIn page</h1>
        
         <input className='inp' type='gmail' placeholder='Enter Email'></input><br/>
         <input className='inp' id='pass' type='password' placeholder='Enter Password'></input><br/>
          <p> </p>
              <div id='btn'><br/>
                <h4><Link>LOGIN</Link></h4><br/>
              </div><br/>
              <p>Not registered?<Link to="/SignUp">Create an account</Link></p><br/>
              <Link to='/'>Home</Link>
         </div>
          </div>
    </div>
  )
}

export default LogIN