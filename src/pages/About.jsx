import React from 'react'
import "../styles/About.css"

function About() {
  return (
    <div className="about-container">
      <h1>
        Quienes somos
      </h1>


      <div className='text-img'>
        <div className='about-text'>
          <p>Creada en 1998 para dar Servicios de demolición e instalación de Materiales Refractarios a Mexicana de Cobre donde presta sus Servicios hasta el 2011.<br/><br/>
            En el 2014 incrementamos nuestros servicios, apoyando en la limpieza de Silos de Cemento, y en este año realizamos nuestra primera reparación de Horno en Planta el Palmar, naciendo así una empresa integral en rubro de los servicios de Mantenimiento Cementera. <br /><br />
            En 2015 iniciamos una asociación con Magnesita división Refractarios, convirtiéndonos en su Instalador oficial, en empresas Cementeras como Cementos Fortaleza, Cementos Moctezuma, Grupo GCC. Consolidándose mas tarde ante la fusión de RHI-Magnesita.<br /><br />
            Con nuestro afán de consolidarnos como una empresa que responda a los nuevos requerimientos gubernamentales y propios de la Industria, decidimos iniciar un proceso de Certificación de cada una de sus actividades, garantizando con esto las solidez de sus procesos y dando a su clientes la confianza de una empresa que certifica y mantiene actualizados sus procesos.</p>
        </div>
        <img src="images/about_2.jpeg" alt="horno"  className='about-img'/>
      </div>
    </div>
  )
}

export default About
