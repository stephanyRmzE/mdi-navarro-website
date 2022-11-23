import { SocialIcon } from "react-social-icons"
import '../styles/footer.css'
import { FaHeart } from "react-icons/fa";
import logo from '../assets/mdi_logo.png'

function Footer() {

  const footerYear = new Date().getFullYear()
  return (
    <div class="footer">
    <div class="footer-links">
      <SocialIcon
            className= 'social-button'
            style={{ height: 45, width: 45 }}
            bgColor="rgba(0,0,0,0)"
            fgColor="#FFF"
            network="facebook"
            url="/"
          />



          <SocialIcon
            className="social-button"
            style={{ height: 45, width: 45 }}
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
