import React, { useState } from 'react'
import {AiOutlineHome,AiOutlineUser,AiOutlineBook,AiOutlineMessage} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import './nav.css'

const Nav = () => {

  const [activeClass,setActiveClass]=useState('#')

  return (
    <nav className='mynav'>
      <a href="#" onClick={()=>setActiveClass('#')} className={activeClass==='#'?'active':''}>Home <AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveClass('#about')} className={activeClass==='#about'?'active':''}>About <AiOutlineUser/></a>
      <a href="#skills" onClick={()=>setActiveClass('#skills')} className={activeClass==='#skills'?'active':''}>Skills<AiOutlineBook/></a>
      <a href="#portfolio" onClick={()=>setActiveClass('#portfolio')} className={activeClass==='#portfolio'?'active':''}>Portfolio <RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveClass('#contact')} className={activeClass==='#contact'?'active':''}>Contact <AiOutlineMessage/></a>

    </nav>
  )
}

export default Nav