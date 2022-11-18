import { SocialIcon } from "react-social-icons"
import '../styles/footer.css'
import { FaHeart } from "react-icons/fa";
import logo from '../assets/mdi_logo.png'

function Footer() {

  const footerYear = new Date().getFullYear()
  return (
    <div class="footer">

      <div className="footer-dir">
        <h2>Dirección</h2>
        <p>Carretera Apaxco-Zumpango Km. 30.5 Tequixquiac Edo de Mexico</p>
      </div>
    <div class="footer-links">
      <SocialIcon
            className= 'social-button'
            style={{ height: 70, width: 70 }}
            bgColor="rgba(0,0,0,0)"
            fgColor="#FFF"
            network="facebook"
            url="/"
          />



          <SocialIcon
            className="social-button"
            style={{ height: 70, width: 70 }}
            bgColor="rgba(0,0,0,0)"
            fgColor="#FFF"
            network="mailto"
            url="/"
            />
    </div>
    <div className="footer-copyright">
      Copyright &copy; {footerYear} All rights reserved
    </div>
  </div>
  )
}

export default Footer
