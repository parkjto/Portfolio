import React from 'react'
import '../styles/Closing.css'
import emailIcon from '../assets/icons/email-icon.svg'
import githubIcon from '../assets/icons/github-icon.svg'

export const Closing = () => {
  return (
    <section className="closing">
      <div className="closing-container">
        {/* Heading */}
        <div className="closing-heading">
          <h2>Thank You</h2>
        </div>

        {/* Text Content */}
        <div className="closing-text">
          <p>문제를 깊이 공감하고, 논리적으로 설계하며,</p>
          <p>코드로 직접 증명하는 박준엽입니다.</p>
          <p>감사합니다.</p>
        </div>

        {/* URL Links */}
        <div className="closing-url">
          <div className="url-item email">
            <div className="url-icon">
              <img src={emailIcon} alt="Email icon" />
            </div>
            <a href="mailto:parkjto@naver.com" className="url-text">
              parkjto@naver.com
            </a>
          </div>
          <div className="url-item github">
            <div className="url-icon">
              <img src={githubIcon} alt="GitHub icon" />
            </div>
            <a href="https://github.com/parkjto" target="_blank" rel="noopener noreferrer" className="url-text">
              github.com/parkjto
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="closing-copyright">
          <p>© 2025 박준엽. Product Designer Portfolio.</p>
        </div>
      </div>
    </section>
  )
}

export default Closing

