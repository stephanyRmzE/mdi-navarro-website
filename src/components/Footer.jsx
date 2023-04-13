
import '../styles/footer.css'
import { AiFillLinkedin, AiOutlineMail} from "react-icons/ai";

function Footer() {

  const footerYear = new Date().getFullYear()
  return (
    <div class="footer">
    <div class="footer-links">

      <div className="footer-link">
        <a target="_blank" href="https://www.linkedin.com/in/mdi-navarro-7a8776263/" rel="noopener noreferrer">
          <AiFillLinkedin/>
        </a>
      </div>
      <div className="footer-link">
        <a href={`mailto:mdinavarro@hotmail.com`  }  class="email-info" >
          <AiOutlineMail/>
        </a>
      </div>
    </div>
    <div className="footer-copyright">
      Copyright &copy; {footerYear} All rights reserved
    </div>
  </div>
  )
}

export default Footer
