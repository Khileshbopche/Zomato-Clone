import React from 'react'
import Home from './Home'
import LogIN from './LogIn.js'
import { Routes,Route } from 'react-router-dom'
import SignUp from './SignUp.js'
import Restro from './Restro.js'
import Viewfood from './Viewfood.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";




const App = () => {
  return (
    <div>
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<LogIN/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/restro' element={<Restro/>}></Route>
        <Route path='/Viewfood' element={<Viewfood/>}></Route>
      </Routes>

    </div>
  )
}

export default App