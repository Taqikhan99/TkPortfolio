import React from 'react'
import Cta from './Cta'
import Mypic from '../../assets/images/me.jpg'
import Mypic2 from '../../assets/images/me2.png'
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
  return (
    <header >
        <div className='container header_container'>
        <h4>Hello I am</h4>
        <h1>Taqi Ahmed</h1>
        <h4 className='text-light'>React Developer</h4>
        <Cta/>
        <HeaderSocials/>
        <div className="me">
            <img src={Mypic2} alt="profile pic" />
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
        </div>
        
    </header>
  )
}

export default Header