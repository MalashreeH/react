import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navigation from './Navigation';
import PagenotFound from './PagenotFound';
import Home from './Home';
import LoginPage from './Login';
import SignupPage from './Signup';
import About from './About';


const Nav = () => {
  return (
    <Router>
  < Navigation/>
        <Routes>
              <Route path="*" element={<PagenotFound/>}/>
              <Route path='/' element={<Home/>}/>
              <Route path="/Login" element={<LoginPage/>}/>
              <Route  path="/Signup" element={<SignupPage/>}/>
              <Route path="/About" element={<About/>} />

        </Routes>
    </Router>
  )
}

export default Nav
