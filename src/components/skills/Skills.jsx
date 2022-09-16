import React from 'react'
import Skill from './Skill'
import './skills.css'

const Skills = () => {
  return (
    <section id='skills' >
        <h4>What Skills I have</h4>
        <h2>My Skills</h2>
        <div className="container skills-container">
            <div className="frontend">
                <h3>FrontEnd Devlopment</h3>
                <div className="techs">
                    <Skill  skillname='Html' skilllevel='Experienced'/>
                    <Skill  skillname='Css' skilllevel='Intermediate'/>
                    <Skill  skillname='Bootstrap' skilllevel='Intermediate'/>
                    <Skill  skillname='Javascript' skilllevel='Intermediate'/>
                    <Skill  skillname='React' skilllevel='Intermediate'/>

                </div>

            </div>
            <div className="backend">
                <h3>Backend Devlopment</h3>
                <div className="techs">
                <Skill  skillname='Node Js' skilllevel='Intermediate'/>
                    <Skill  skillname='Express Js' skilllevel='Intermediate'/>
                    <Skill  skillname='Flask' skilllevel='Beginner'/>
                    <Skill  skillname='Sql Server' skilllevel='Intermediate'/>
                    <Skill  skillname='MongoDb' skilllevel='Beginner'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills