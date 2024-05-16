import React from 'react'
import logo from "../images/logo.jpg"
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
 


const [nav, setNav] = useState(false);
  function handelNav(){
    setNav(!nav)
  }

  return (
    // mobile size
    <nav>
    <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={handelNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={handelNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={handelNav} to="/models">
                Models
              </Link>
            </li>
            <li>
              <Link onClick={handelNav} to="/testimonials">
                Testimonials
              </Link>
            </li>
            <li>
              <Link onClick={handelNav} to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={handelNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <span class="material-symbols-outlined close" onClick={handelNav} >close</span>
        </div>

    <div className='nav-div'>
    <Link onClick={() => window.scrollTo(0, 0)} to="/">
      <img src={logo} alt="logo" className='logo'  />
    </Link>
    <div className="bullets">
       <Link className="a" to="/">Home</Link>
       <Link className="a" to="/about">About</Link>
       <Link className="a" to="/contact">Contact</Link>
       <Link className="a" to="/models">Models</Link>
       <Link className="a" to="/teams">Teams</Link>
       <Link className="a" to="/testimonials">Testimonials</Link>
    </div>
    <div>
            <Link className="navbar__buttons__sign-in" to="/">
              Sign In
            </Link>
            <Link className="navbar__buttons__register" to="/">
              Register
            </Link>
          </div>
          {/* mobile */}
          <div className="mobile-hamb" >
            <span class="material-symbols-outlined" onClick={handelNav}>menu</span>
            
          </div>
    </div>
    
    </nav>
  )
}

export default Nav