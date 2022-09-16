import React from 'react'
import PortfolioItem from './PortfolioItem'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <PortfolioItem title='Weather Application'/>
        <PortfolioItem title='Weather Application'/>
        <PortfolioItem title='Weather Application'/>
        <PortfolioItem title='Weather Application'/>
        <PortfolioItem title='Weather Application'/>
      </div>


    </section>
  )
}

export default Portfolio