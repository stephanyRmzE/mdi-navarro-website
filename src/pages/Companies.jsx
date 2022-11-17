import React from 'react'
import "../styles/Companies.css"
import {CompanyItems} from "../components/CompanyItems"

export default function Companies() {
  return (
    <div className='companies-container'>
      <h1>Compañias con las que trabajamos</h1>
      <div className='companies-div'>
        {CompanyItems.map((item, index) => {
            return(
              <div key={index}>
                <img src={item.image} alt={item.alt} className={item.class}  />
              </div>
            )
          })}
      </div>
      <div className='gradiant-orange'></div>
    </div>
  )
}
