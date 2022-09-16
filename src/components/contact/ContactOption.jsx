import React from 'react'

const ContactOption = ({icon,head,contact,contactLink}) => {
  return (
    <div className='contact-option'>
        <h4 id='icon'>{icon}</h4>
        <h3>{head}</h3>
        <h4>{contact}</h4>
        <a href={contactLink} target='_blank'>Send a  message</a>

    </div>
  )
}

export default ContactOption