import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {

  const [click, setClick] = useState(false);
  const [buttton, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = ( ) =>{

  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to= "/" className= "navbar-logo">
            <img src="images/mdi_logo.png" alt="logo_compañia"  className='navbar-logo'/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item' >
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item' >
              <Link to='/servicios' className='nav-links' onClick={closeMobileMenu}>
               Servicios
              </Link>
            </li>
            <li className='nav-item' >
              <Link to='/acerca' className='nav-links' onClick={closeMobileMenu}>
               Acerca de Nosotros
              </Link>
            </li>
            <li className='nav-item' >
              <Link to='/contacto' className='nav-links' onClick={closeMobileMenu}>
               Contacto
              </Link>
            </li>
            <li className='nav-item' >
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
               Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle = 'btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
