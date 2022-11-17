import React from 'react'
import "../styles/About.css"
import { useInView } from 'react-intersection-observer';


function About() {

  const { ref, inView } = useInView({
    threshold: 0.05,
    rootMargin: '100px ',
  });

  return (
    <div className="about-container" id='about'>

      <div className='text-img'>
        <div className='about-text'>
          <h1>Quienes somos</h1>
          <p> Nuestra empresa es originaria de Tequixquiac, estado de México nacida en el 2004 para dar servicios de demolición e instalación de materiales refractarios, siguiendo el legado de nuestras generaciones, desde entonces nos hemos expandido para dar servicioH de mantenimiento industrial y civil. <br /><br />
              Contamos con toda la infraestructura, herramientas, equipo y personal técnico calificado para cumplir con los requerimiento y compromisos de nuestros clientes.<br /><br />
              Estamos comprometidos a satisfacer todas las necesidades de nuestros clientes, asegurándonos de la solidez de nuestros procesos y dándoles la confianza de una empresa que certifica y se mantiene.</p>
        </div>
        <img src="images/about_2.jpeg" alt="quienes somos" ref={ref} className={inView ? 'about-img-activo' : 'about-img'}/>
      </div>
    </div>
  )
}

export default About
