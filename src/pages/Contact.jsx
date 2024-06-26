
import Location from '../components/Location'
import {useState} from "react";
import '../styles/Contact.css'


function Contact() {

  const [formData, SetFormData ] =useState({
      name: '',
      email: '',
      password: ''
  })
  const {name, email, message} = formData



  const onChange = (e) => {
    SetFormData((prevState) => ({...prevState,
      [e.target.id]: e.target.value,

    }))}



  return (
    <div className='contact-container' id= 'contact'>
      <p className='pageHeader'>Contactanos</p>
        <div className="contact-map">

          <div className="contactDiv" id="contact">

            <form className='messageForm'>
              <div className="infoDiv" >
                <div className="formInputDiv">
                  <label htmlFor='name' className='inputLabel'>Nombre *</label>
                  <input
                    type="text"
                    className="formInput"
                    id= 'name'
                    value={name}
                    onChange={onChange} />
                </div>
                <div className="formInputDiv">
                  <label htmlFor='email' className='inputLabel'>Email *</label>
                  <input
                    type="email"
                    className="formInput"
                    id= 'email'
                    value={email}
                    onChange={onChange} />
                </div>
              </div>
              <div className='messageDiv'>
                <label htmlFor='message' className='inputLabel'>Mensaje *</label>
                <textarea
                  name='message'
                  id='message'
                  className='textarea'
                  value={message}
                  onChange={onChange}
                ></textarea>
              </div>
              <a
                href={`mailto:mdinavarro@hotmail.com?Subject=&body=${message}`}
              >
                <button type='button' className='btn-orange'>
                  Enviar
                </button>
              </a>
            </form>

          </div>
          <div className='map-container'>
            <Location></Location>
          </div>
        </div>
        <div className="contact-info">
          <h2>Dirección</h2>
          <p>Carretera Apaxco-Zumpango Km. 30.5 Tequixquiac Edo de Mexico</p>
          <h2>Telefono</h2>
          <ul>
            <li className='phone-list'>
              <a href="tel:+525513754576" style={{color: "black"}}>
                <i class="fa fa-phone contact-icons" /> +52 591 912 2669 
              </a>
            </li>
            <li className='phone-list'>
              <a href="https://wa.me/+525513754576" style={{color: "black"}}>
                <i class="fa fa-whatsapp contact-icons"/> +52 551 375 4576
              </a>
            </li>
          </ul>
          <div className='container'>
            <h2>Correo</h2>
            <ul className='email-container'>
              <li className='email-list'>
                <a href={`mailto:jesus.navarro@mdinavarro.com.mx`  }  class="email-info" >
                  <i class="fa fa-envelope contact-icons" /> jesus.navarro@mdinavarro.com.mx
                </a>
              </li>
              <li className='email-list'>
                <a href={`mailto:carmen.juarez@mdinavarro.com.mx`  }  class="email-info" >
                  <i class="fa fa-envelope contact-icons" /> carmen.juarez@mdinavarro.com.mx
                </a>
              </li>
              <li className='email-list'>
                <a href={`mailto:ingrid.navarro@mdinavarro.com.mx`  }  class="email-info" >
                  <i class="fa fa-envelope contact-icons" /> ingrid.navarro@mdinavarro.com.mx
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Contact;
