import React from 'react'
import "../styles/Service.css"
import {ServiceItems} from "../components/ServiceItems"

function Service() {
  return(
  <div className="service-container" id='service'>
    <h1>Nuestros servicios</h1>
    <div className='servicios-div'>
      {ServiceItems.map((item, index) => {
          return(
            <div className='text-img-serv' key= {index}>
              <img src={item.image} alt={item.title}  className='service-img rounded-corners-gradient-borders '/>
              <div className='servise-text'>
                <p>{item.title} </p>
              </div>
            </div>
          )
        })}
    </div>
    
  </div>
  )
}

export default Service
