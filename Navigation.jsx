import React from 'react'
import Home from './Home';
import Img from "./insta.jfif"
import Back from "./back.jpg"
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div style={{
        backgroundImage: 'url('+Back+')',
       
      }} >
    <div style={{backgroundColor:"black",backgroundImage:"" ,display : "flex" , justifyContent:"space-between" , alignItems : "center" , height:"75px" , border :"2px solid red"}}>
        <div>
            <img src={Img} alt="" style={{backgroundColor:"pink",height:"70px" ,width:"100px"}}/>
        </div>
        <div >
            <ol style={{display :"flex" , width:"400px" , justifyContent:"space-evenly"}}>
                <li>

                    <Link style={{textDecoration: 'none',color:"red"}} to="/">    HOME</Link>
                </li>
                <li>
                    <Link style={{textDecoration: 'none',color:"red"}} to="/login">LOGIN</Link>
                </li>
                <li>
                    <Link style={{textDecoration: 'none',color:"red"}} to="/signup">SIGNUP</Link>
                </li>
                <li>
                   <Link style={{textDecoration: 'none',color:"red"}} to="/about">ABOUT</Link>
                </li>
            </ol>
        </div>
    </div>
    </div>
  )
}

export default Navigation