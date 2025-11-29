import React from 'react';
import '../styles/MyBizProblem.css';
import MyBizSidebar from './MyBizSidebar';

/**
 * MyBizProblem Component
 * 
 * Displays the "Problem Definition" section of the case study.
 * Includes a sidebar for navigation context and a main content area
 * detailing the user problems, discovery process, and pain points.
 * 
 * Structure follows the Figma design "Desktop - Problem".
 */
const MyBizProblem = () => {
  return (
    <section id="mybiz-problem" className="mybiz-problem-wrapper">
      {/* Shared Sidebar Navigation */}
      <MyBizSidebar activeSection="Problem" />

      {/* Main Content */}
      <div className="mybiz-main-content">
        
        {/* Hero Section */}
        <section className="problem-hero">
          <span className="section-label">Problem Definition</span>
          <h1 className="hero-heading">
            디지털 소외 계층이 겪는<br />
            실질적 사용성 장벽
          </h1>
        </section>

        {/* Discovery Process Grid */}
        <section className="discovery-section">
          <h2 className="problem-section-title">Discovery Process</h2>
          <div className="discovery-grid">
            {/* Card 01 */}
            <div className="discovery-card">
              <div className="discovery-number">01</div>
              <div className="discovery-divider"></div>
              <h3 className="discovery-title">Observation</h3>
              <p className="discovery-body">
                디지털 네이티브가 아닌 사용자들의 앱 사용 고충을 현장에서 직접 관찰했습니다.
              </p>
            </div>

            {/* Card 02 */}
            <div className="discovery-card">
              <div className="discovery-number">02</div>
              <div className="discovery-divider"></div>
              <h3 className="discovery-title">User Research</h3>
              <p className="discovery-body">
                복잡한 UI와 기능 과잉이 구조적 문제임을 파악하고 페르소나를 구체화했습니다.
              </p>
            </div>

            {/* Card 03 */}
            <div className="discovery-card">
              <div className="discovery-number">03</div>
              <div className="discovery-divider"></div>
              <h3 className="discovery-title">Desk Research</h3>
              <p className="discovery-body">
                '디지털 취약 소상공인' 자료를 분석하여 디지털 격차가 매출 격차로 이어진다는 사실을 확인했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* User Pain Points Grid */}
        <section className="pain-section">
          <h2 className="problem-section-title">User Pain Points</h2>
          <div className="pain-grid">
            {/* Pain Card 1: Time */}
            <div className="pain-card">
              <div className="pain-icon-wrapper">
                {/* SVG Icon: Clock */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="pain-content-inner">
                <h3 className="pain-title">시간 부족</h3>
                <span className="pain-label">Time Shortage</span>
                <p className="pain-body">
                  "가게 운영만으로도 바빠서 데이터를 분석할 물리적 시간이 없습니다."
                </p>
              </div>
            </div>

            {/* Pain Card 2: Expertise */}
            <div className="pain-card">
              <div className="pain-icon-wrapper">
                {/* SVG Icon: User Off/Confused */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                  <line x1="18" y1="8" x2="23" y2="13"></line>
                  <line x1="23" y1="8" x2="18" y2="13"></line>
                </svg>
              </div>
              <div className="pain-content-inner">
                <h3 className="pain-title">전문성 부재</h3>
                <span className="pain-label">Lack of Expertise</span>
                <p className="pain-body">
                  "마케팅이나 정책 용어는 너무 어렵고, 복잡한 UI는 사용하기 힘듭니다."
                </p>
              </div>
            </div>

            {/* Pain Card 3: Cost */}
            <div className="pain-card">
              <div className="pain-icon-wrapper">
                {/* SVG Icon: Coins/Money */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                  <line x1="12" y1="18" x2="12" y2="2"></line>
                </svg>
              </div>
              <div className="pain-content-inner">
                <h3 className="pain-title">높은 비용</h3>
                <span className="pain-label">High Cost</span>
                <p className="pain-body">
                  "전문 컨설팅이나 마케팅 대행사를 쓰기에는 비용이 부담됩니다."
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
};

export default MyBizProblem;
