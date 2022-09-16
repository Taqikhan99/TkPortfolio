import React from 'react'

const AboutCard = (props) => {
  return (
    <div className='aboutCard'>
        <h3 className='about_icon'>{props.logo}</h3>
        <h4>{props.heading}</h4>
        <small>{props.desc}</small>
    </div>
  )
}

export default AboutCard