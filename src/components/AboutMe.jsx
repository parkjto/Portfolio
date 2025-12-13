import React from "react";
import "../styles/Aboutme_style.css";
import resumePdf from "../assets/Resume.pdf";
import portfolioPdf from "../assets/Portfolio.pdf";

export const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-content">
        <div className="about-header">
          <div className="header-row">
            <div className="page-title">About Me</div>
            <div className="download-buttons">
              <a 
                href={portfolioPdf} 
                download="ParkJunYeop_Portfolio.pdf" 
                className="portfolio-download"
              >
                포트폴리오 다운
              </a>
              <a 
                href={resumePdf} 
                download="ParkJunYeop_Resume.pdf" 
                className="resume-download"
              >
                자소서 다운
              </a>
            </div>
          </div>
          <div className="header-row">
            <div className="intro-text">안녕하세요, 디자인의 디테일을 아는 개발자 박준엽입니다.</div>
          </div>
        </div>

        <div className="content-grid">
          <div className="column column-left">
            <div className="info-block">
              <h3 className="Aboutme-section-title">Careers</h3>
              <div className="block-content">
                <p className="body-text">
                  - 2019 ~ 2021 농협경제지주 주식회사 (주임 회계 매입매출 월,연 마감)
                </p>
              </div>
            </div>
            <div className="info-block">
              <h3 className="Aboutme-section-title">Major</h3>
              <p className="body-text">컴퓨터정보공학과</p>
            </div>
            <div className="info-block">
              <h3 className="Aboutme-section-title">Extracurricular Activities</h3>
              <div className="activity-list">
                <p className="body-text">- 2024.09 ~ 2025.01 9oormthonUNIV 3기</p>
                <p className="body-text">- 2025.06.29 ~ 2025.07.07 말레이시아 단기 연수</p>
                <p className="body-text">- 1학년 3학년 과대표</p>
                <p className="body-text">- 3학년 학생회 총무팀</p>
              </div>
            </div>
            <div className="info-block work-style-desc">
              <h3 className="Aboutme-section-title">Work Styles</h3>
              <p className="body-text">
                다른 사람의 능력치를 올려주는 동료가 되고 싶습니다. 공유를 통해 함께
                성장하며, 공동의 문제 해결에 기여하는 것을 즐깁니다.
              </p>
            </div>
          </div>
          <div className="column column-right">
            <div className="info-block">
              <h3 className="Aboutme-section-title">Skill Tool</h3>
              <div className="skills-container">
                <div className="skill-category">
                  <h4 className="skill-category-title">Design</h4>
                  <div className="skill-tags">
                    <span className="body-text">Photoshop</span>
                    <span className="body-text">Figma</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="skill-category-title">Programming Language</h4>
                  <div className="skill-tags">
                    <span className="body-text">Flutter</span>
                    <span className="body-text">React</span>
                    <span className="body-text">JavaScript</span>
                    <span className="body-text">Python</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4 className="skill-category-title">AI</h4>
                  <div className="skill-tags">
                    <span className="body-text">Cursor</span>
                    <span className="body-text">Gemini</span>
                    <span className="body-text">ChatGPT</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-block">
              <h3 className="Aboutme-section-title">Certifications</h3>
              <p className="body-text">정보처리산업기사 필기 합격</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
