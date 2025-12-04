import React, { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../styles/Aboutme_style.css";
import resumePdf from "../assets/Resume_ParkJunYeop.pdf";

export const AboutMe = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPortfolio = async () => {
    if (isDownloading) return; // 이미 다운로드 중이면 중복 실행 방지
    
    // 현재 스크롤 위치 저장 (finally 블록에서 사용하기 위해 외부에 선언)
    let originalScrollX = 0;
    let originalScrollY = 0;
    
    try {
      setIsDownloading(true);
      
      // 현재 스크롤 위치 저장
      originalScrollX = window.scrollX || window.pageXOffset || document.documentElement.scrollLeft;
      originalScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      
      // PDF 생성 모드 활성화 (슬라이더 펼치기 등)
      document.body.classList.add('generating-pdf');
      
      // 스타일 변경이 렌더링에 반영되도록 잠시 대기
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 각 섹션을 개별적으로 캡처하기 위한 섹션 선택자 목록 (순서대로)
      const sectionSelectors = [
        '.hero', // PortfolioHero
        '.about-me', // AboutMe
        '.project-index-container', // ProjectIndex
        '#mybiz-overview', // MyBizOverview
        '#mybiz-flowchart', // MyBizFlowChart
        '#mybiz-problem', // MyBizProblem
        '#mybiz-solution', // MyBizSolution
        '#mybiz-result', // MyBizResult
        '#naru-overview', // NaruOverview
        '#naru-flowchart', // NaruFlowChart
        '#naru-problem', // NaruProblem
        '#naru-solution', // NaruSolution
        '#naru-result', // NaruResult
        '#ige-overview', // IgEOverview
        '#ige-flowchart', // IgEFlowChart
        '#ige-problem', // IgEProblem
        '#ige-solution', // IgESolution
        '#ige-learning', // IgELearning
        '.closing', // Closing
      ];

      const doc = new jsPDF("l", "mm", "a4"); // "l" for landscape
      const pdfWidth = 297; // A4 landscape width in mm
      const pdfHeight = 210; // A4 landscape height in mm

      // 각 섹션을 순차적으로 처리
      for (let i = 0; i < sectionSelectors.length; i++) {
        const selector = sectionSelectors[i];
        let element = document.querySelector(selector);
        
        if (!element) {
          console.warn(`Section not found: ${selector}`);
          continue; // 섹션을 찾을 수 없으면 건너뛰기
        }

        // html2canvas 옵션 설정 (스크롤 없이 요소의 절대 위치로 캡처)
        const canvas = await html2canvas(element, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          logging: false,
          scrollX: 0,
          scrollY: 0,
          windowWidth: document.documentElement.scrollWidth,
          windowHeight: document.documentElement.scrollHeight,
        });

        const imgData = canvas.toDataURL("image/png");
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // 각 섹션을 새 페이지에 추가 (첫 번째 섹션 제외)
        if (i > 0) {
          doc.addPage();
        }

        // 이미지가 한 페이지를 초과하는 경우 처리
        if (imgHeight <= pdfHeight) {
          // 한 페이지에 들어가는 경우
          doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        } else {
          // 여러 페이지에 걸치는 경우 - 첫 페이지 추가
          let heightLeft = imgHeight;
          let position = 0;
          
          doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pdfHeight;

          // 나머지 페이지 추가
          while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;
          }
        }
      }

      doc.save("ParkJunYeop_Portfolio.pdf");
    } catch (error) {
      console.error("PDF creation failed", error);
      alert("PDF 다운로드 중 오류가 발생했습니다.");
    } finally {
      // PDF 생성 모드 비활성화 (원래대로 복귀)
      document.body.classList.remove('generating-pdf');
      
      // 원래 스크롤 위치로 복원
      window.scrollTo(originalScrollX, originalScrollY);
      
      setIsDownloading(false);
    }
  };

  return (
    <section className="about-me">
      <div className="about-content">
        
        {/* Header Section */}
        <div className="about-header">
          <div className="header-row">
            <div className="page-title">About Me</div>
            <div className="download-buttons">
              <a href={resumePdf} download="박준엽_이력서.pdf" className="resume-download">
                이력서 다운
              </a>
              <button 
                onClick={handleDownloadPortfolio} 
                className="portfolio-download"
                disabled={isDownloading}
              >
                {isDownloading ? '다운로드 중...' : '포트폴리오 다운'}
              </button>
            </div>
          </div>
          <div className="header-row">
            <div className="intro-text">안녕하세요 디자인과 개발을 하는 박준엽 입니다</div>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="content-grid">
          
          {/* Left Column: Careers, Major, Extra, Work Styles */}
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

          {/* Right Column: Skills, Certifications */}
          <div className="column column-right">
            
            <div className="info-block">
              <h3 className="Aboutme-section-title">Skill Tool</h3>
              
              <div className="skills-container">
                {/* Design Skills */}
                <div className="skill-category">
                  <h4 className="skill-category-title">Design</h4>
                  <div className="skill-tags">
                    <span className="body-text">Photoshop</span>
                    <span className="body-text">Figma</span>
                  </div>
                </div>

                {/* Programming Skills */}
                <div className="skill-category">
                  <h4 className="skill-category-title">Programming Language</h4>
                  <div className="skill-tags">
                    <span className="body-text">Flutter</span>
                    <span className="body-text">React</span>
                    <span className="body-text">JavaScript</span>
                    <span className="body-text">Python</span>
                  </div>
                </div>

                {/* AI Skills */}
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