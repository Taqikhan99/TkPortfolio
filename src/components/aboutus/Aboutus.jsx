
import React from 'react'
import Mypic2 from '../../assets/images/me2.png'
import {BsAwardFill}from 'react-icons/bs'
import {FiUsers}from 'react-icons/fi'
import {VscFolderLibrary}from 'react-icons/vsc'

import AboutCard from './AboutCard'

import './aboutus.css'
const Aboutus = () => {
  return (
    <section id='about'>
      <br />

      <h4>Get To Know</h4>
      <h2>About Me</h2>
      <div className="container about_container">
          <div className="about_me">
          <div className="about_me_image">
            <img src={Mypic2} alt="" />
          </div>
          </div>
          
          <div className="about_content">
            <div className="about_cards">
                <AboutCard logo ={<BsAwardFill/>} heading='Experience' desc='1+ year working experience'/>
                <AboutCard logo ={<FiUsers/>} heading='Clients' desc='5+ active clients'/>
                <AboutCard logo ={<VscFolderLibrary/>} heading='Projects' desc='10+ projects done'/>
            </div>
            <p>Hi, I am a skilled frontend Developer, have expertise in technologies like Html,Css,Javascript and React Js framework. Along with that I have knowledge about backend technologoies including Node Js, Python, Flask, Sql,Mongodb</p>

           <a href="#contact"><button className='btn-about'> Let's Contact</button></a> 
          </div>

      </div>
      </section>
  )
}

export default Aboutus