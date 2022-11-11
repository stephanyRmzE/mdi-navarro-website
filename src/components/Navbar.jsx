import React, {useState} from 'react'
import {Link} from 'react-scroll'
import '../styles/Navbar.css'

function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (
    <>
      <nav className="navbar">

          <Link to= "/" className= "navbar-logo" >
            <img src="images/mdi_logo.png" alt="logo_compañia"  className='navbar-logo'/>
          </Link>

          <div className="menu-icons" onClick={handleClick}>
            <i className={click ? 'fas fa-times navbar-more' : 'navbar-more fas fa-bars'}></i>
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu '}>

            <li  >
              <Link to='/service' className='nav-links' id='nav-link-one' >
               Servicios
              </Link>
            </li>
            <li >
              <Link to='/about' className='nav-links' >
               Acerca de Nosotros
              </Link>
            </li>
            <li  >
              <a href="tel:662-139-7559" className='nav-links' id='nav-call'>
                <i class="fa-solid fa-phone"/>
                662 139 7203
              </a>
            </li>
            <li  >
              <Link to='/contact' className='nav-links btn-orange' >
               Contacto
              </Link>
            </li>

          </ul>

      </nav>
    </>
  )
}

export default Navbar
