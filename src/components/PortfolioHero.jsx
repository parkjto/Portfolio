import React from 'react'
import '../styles/PortfolioHero.css'

const heroContent = {
  badge: 'Portfolio',
  title: (
    <>회계의 흐름을 이해하는 개발자 박준엽</>
  ),
}

export const PortfolioHero = () => {
  return (
    <div className="app-shell">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-badge">{heroContent.badge}</p>
          <h1>{heroContent.title}</h1>
        </div>
      </section>
    </div>
  )
}

export default PortfolioHero
