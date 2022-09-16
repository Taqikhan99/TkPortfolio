import React,{useRef} from 'react'
import ContactOption from './ContactOption'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import emailjs from 'emailjs-com'

import './contact.css'

const Contact = () => {

  const form =useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    let nameVal= document.getElementById('nameinput')
    console.log(nameVal.value)
    let emailVal= document.getElementById('emailinput')
    console.log(emailVal.value)
    let textArea= document.getElementById('msg-textarea')
    console.log(emailVal.value)


    

    emailjs.sendForm('service_h4n1qur', 'template_0u1gkzb', form.current, 'dDrSmgkAlLAj8OHOf')
      .then((result) => {
          console.log(result.text);
          
          alert('Email Send Successfully!')
          nameVal.value=''
          emailVal.value=''
          textArea.value=''
          
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h4>Get In Touch</h4>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <ContactOption icon={<AiOutlineMail/>} head='Email' contact='taqiahmed339@gmail.com' contactLink='mailto:taqiahmed339@gmail.com'/>
          <ContactOption icon={<RiMessengerLine/>} head='Messenger'contact='Taqi Ahmed'  contactLink='https://m.me/id=100008292261934'/>
          <ContactOption icon={<AiOutlineWhatsApp/>} head='Whatsapp' contact='Taqi Ahmed' contactLink='https://api.whatsapp.com/send?phone=+923342973647'/>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" id='nameinput' placeholder='Your Name Here' name='name' required />
          <input type="text" id='emailinput' placeholder='Your Email Here' name='email' required/>
          <textarea name="message" id="msg-textarea" cols="30" rows="8" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact