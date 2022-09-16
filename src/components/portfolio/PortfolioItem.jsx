import React from 'react'
import me from '../../assets/images/weatherapp1.PNG'
const PortfolioItem = (props) => {
  return (
    <div className='portfolio-item'>
        <div className="portfolio-item-img">
        <img src={me} alt="" />
        </div>
        
        <h3>{props.title}</h3>
        <div className="btnSec">
            <a href="https://github.com/Taqikhan99/weatherappReact" target='_blank'><button className="btn">Github</button></a>
            <a href=""><button className="btn btn-primary">Live Demo</button></a>
        </div>
    </div>
  )
}

export default PortfolioItem