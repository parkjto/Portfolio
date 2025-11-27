import React from 'react'
import '../styles/PortfolioHero.css'

const heroContent = {
  badge: 'Portfolio',
  title: (
    <>
      디자인과 구현의 경계를 허무는 프로덕트 디자이너<br />
      박준엽
    </>
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
