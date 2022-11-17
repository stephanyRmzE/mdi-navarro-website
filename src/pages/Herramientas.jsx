import React from 'react'
import "../styles/Herramientas.css"
import {HerramientasItems} from "../components/HerramientasItems"

function Herramientas() {
  return (
    <div className='herramientas-container'>
      <h1>Herramientas y equipos</h1>
      <div className='herramientas-div'>
        {HerramientasItems.map((item, index) => {
            return(
              <div className='img-num' key={index}>
                <p>{item.quantity}</p>
                <img src={item.image} alt={item.title} className={item.class}  />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Herramientas
