import React from 'react'
import "../styles/Companies.css"
import {CompanyItems} from "../components/CompanyItems"

export default function Companies() {
  return (
    <div className='companies-container'>
      <h1>Empresas donde hemos prestado nuestros servicios</h1>
      <div className='companies-div'>
        {CompanyItems.map((item, index) => {
            return(
              <div key={index}>
                <img src={item.image} alt={item.alt} className={`${item.class} company-logo`}  />
              </div>
            )
          })}
      </div>
    </div>
  )
}
