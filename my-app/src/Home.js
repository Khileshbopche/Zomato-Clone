import React from 'react'
import './Home.css'
import bg from './Images/81f3ff974d82520780078ba1cfbd453a1583259680.webp'
import { Link, NavLink } from 'react-router-dom'
import LogIN from './LogIn'
import  R from './Images/8313a97515fcb0447d2d77c276532a511583262271.webp'
import Card from './Card'
import Footer from'./Footer'



const Home = () => {
  return (
    <div>
        <div className='parent'>
        <img src={bg}/>
             <div className='Nav'>

                <div className='right-nav'>
                    <span className='fnt'>HOME</span>
                    <Link  style={ {textDecoration:'none'} } to='/viewfood' className='fnt'> Viewfood</Link>
                    <NavLink style={ {textDecoration:'none'} } className='fnt' to='/restro'>Add Restaurant</NavLink>
                </div>

                <div className='left-nav'>
                    <Link  style={ {textDecoration:'none'} } to='/SignUp' className='fnt'>Sign Up</Link>
                    <Link  style={ {textDecoration:'none'} } to='/LogIn' className='fnt'>Login</Link>
                </div>

                </div>

            

                <div className='heading-zomato'>
                   <img  src={R}/>
                </div>
                
                <div className='input-search'>
                <h1 className='code'>Descover the best food & drink </h1>
                <div className="input">
                <select name="" id="">
                    <option value="Chennai">Chennai</option>
                    <option value="Jaipur">Jaipur</option>
                    <option selected value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Kolkata">Kolkata</option>
                </select>
            
                <input type="text" placeholder="Search for restaurant or a dish"/>
                </div>
                {/* <h2> </h2> */}
            </div>
            <h2 className='head'> Popular locations in Bhopal</h2>
            <p className='head'>  From swanky upscale restaurants to the cosiest hidden 
            gems serving the most incredible food, 
                Zomato covers it all. Explore menus, and millions of restaurant photos 
                and rev  </p>
            
        </div>
        
        <Card/>
        {/* <Footer/> */}
        <div className='container  w-75 mt-5 d-flex justify-content-center align-items-center  flex-column'>
        <h1  style={{fontWeight:400}} >  Popular location in  🇮🇳  Bhopal</h1>
        <p  className='mt-3'   id='text'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type specimen book. </p>
      </div>  
      <div className='container   d-flex justify-content-center align-items-center  flex-colu  w-75 mt-5'>
          <div className='row  '>
            <div  className='col-lg-4'>
            <div className='card1'>
              {/* <h3> Bhopal </h3> */}
            </div>
            </div>
            <div  className='col-lg-4'>
            <div className='card1'>
              {/* <h3> Bhopal</h3> */}
            </div>
            </div>
            <div  className='col-lg-4'>
            <div className='card1'>
              {/* <h3> Bhopal </h3> */}
            </div>
            </div>

          
          </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Home