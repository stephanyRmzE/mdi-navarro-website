import React from 'react'
import "../styles/Service.css"

function Service() {
  return(
  <div className="service-container">
    <h1>Nuestros servicios</h1>
    <div className='servicios-div'>
      <div className='text-img-serv'>
        <img src="images/demolicion_serv.png" alt="demolicion"  className='service-img'/>
        <div className='gradiant-red'></div>
        <div className='servise-text'>
          <p>Demolición e  instalación de refractarios</p>
        </div>
      </div>

      <div className='text-img-serv'>
        <img src="images/limpieza_almacenes.png" alt="demolicion"  className='service-img'/>
        <div className='gradiant-orange'></div>
        <div className='servise-text'>
          <p>Limpieza de almacenes</p>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Service
