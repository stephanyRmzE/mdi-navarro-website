import React from 'react'
import "../styles/About.css"
import { motion } from "framer-motion";
import aboutImage from "../assets/about.jpeg";

function About() {


  return (
    <div className="about-container" id='about'>

      <div className='text-img'>
        <div className='about-text'>
          <h1>Quienes somos</h1>
          <p> Nuestra empresa es originaria de Tequixquiac, estado de México nacida en el 2004 para dar servicios de demolición e instalación de materiales refractarios, siguiendo el legado de nuestras generaciones, desde entonces nos hemos expandido para dar servicios de mantenimiento industrial y civil. <br /><br />
              Contamos con toda la infraestructura, herramientas, equipo y personal técnico calificado para cumplir con los requerimiento y compromisos de nuestros clientes.<br /><br />
              Estamos comprometidos a satisfacer todas las necesidades de nuestros clientes, asegurándonos de la solidez de nuestros procesos y dándoles la confianza de una empresa que certifica y se mantiene.</p>
        </div>

      <motion.div

        initial={{ x: "40vw" }}
        whileInView={{ x: "0vw" }}
        transition={{ type: "Tween", duration: 1 }}
      >
        <img src={aboutImage} alt="about info" className='about-img' />
      </motion.div>

      </div>
    </div>
  )
}

export default About
