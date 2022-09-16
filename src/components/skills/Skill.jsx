import React from 'react'
import {HiBadgeCheck} from 'react-icons/hi'
const Skill = (props) => {
  return (
    <div className='skill'>
        
        <h3><HiBadgeCheck/></h3>
        <div className="info">
        <h4 className='techname'>{props.skillname}</h4>
        <p className='level'>{props.skilllevel}</p>  
        </div>
          
    </div>
  )
}

export default Skill