import React, {useState} from 'react'
import {Link} from 'react-scroll'
import '../styles/Navbar.css'
import logo from '../assets/mdi_logo.png'

function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (
    <>
      <nav className="navbar">

            <Link
              className="navbar-logo"
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-180}
              duration={500}
            ><img src={logo} alt="logo" className='navbar-logo' /></Link>


          <div className="menu-icons" onClick={handleClick}>
            <i className={click ? 'fas fa-times navbar-more' : 'navbar-more fas fa-bars'}></i>
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu '}>

            <li  >
              <Link
              className="nav-links"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-133}
              duration={500}
              >Acerca de Nosotros</Link>
            </li>
            <li >
              <Link
              className="nav-links"
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-170}
              duration={500}
            >Servicios</Link>
            </li>
            <li  >
              <a href="tel:+525513754576" className='nav-call'>
                <i class="fa-solid fa-phone"/>
                +52 551 375 4576
              </a>
            </li>
            <li  >
              <Link
              className="nav-links btn-orange'"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-160}
              duration={500}
            >Contactanos</Link>
            </li>

          </ul>

      </nav>
    </>
  )
}

export default Navbar
