import '../styles/Hero.css'


function Hero() {
  return (
    <div className='hero' id="hero">
      <div className='hero-bg'>
        <div className='hero-img'></div>

      </div>

        <div className="hero-text">
          <img src="images/mdi_white.png" alt="logo_compañia"  className='hero-anagrama'/>
          <h1>Mantenimiento y Demoliciones Industriales</h1>
          <p>Escoge el servicio que tu compañia necesite</p>
          <a href="/" className='show'> SERVICIOS</a>
          <div class="smoke-wrap">
            <img className='smoke' src="https://www.transparentpng.com/thumb/smoke/H1CWRG-smoke-effect-clipart.png" alt="smoke"/>
          </div>
          <div className="smoke-wrap">
            <img className="smoke2" src="https://www.transparentpng.com/thumb/smoke/H1CWRG-smoke-effect-clipart.png" alt="smoke"/>
          </div>
          <div className="smoke-wrap">
            <img class="smoke3" src="https://www.transparentpng.com/thumb/smoke/H1CWRG-smoke-effect-clipart.png" alt="smoke"/>
          </div>
        </div>
      </div>
    
  )
}

export default Hero
