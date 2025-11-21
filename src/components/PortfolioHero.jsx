import React from 'react'
import '../styles/PortfolioHero.css'

const heroContent = {
  badge: 'Portfolio',
  title: '안녕하세요 디자인과 개발을 하는 박준입니다.',
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
