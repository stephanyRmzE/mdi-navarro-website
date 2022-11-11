import '../styles/Hero.css'


function Hero() {
  return (
    <div className='hero'>
      <div className='hero-bg'>
        <div className='hero-img'></div>

      </div>
      <div className="hero-text">
        <img src="images/mdi_white.png" alt="logo_compañia"  className='hero-anagrama'/>
        <h1>Mantenimiento y Demoliciones Industriales</h1>
        <p>Escoge el servicio que tu compañia necesite</p>
        <a href="/" className='show'> SERVICIOS</a>
      </div>
    </div>
  )
}

export default Hero
