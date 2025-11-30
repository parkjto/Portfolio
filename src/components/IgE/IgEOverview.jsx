import React from 'react';
import '../../styles/IgE/IgEOverview.css';
import IgESidebar from './IgESidebar';

const IgEOverview = () => {
  const badges = ['Web Service', 'Recommendation', 'Health'];

  return (
    <section id="ige-overview" className="ige-overview-container">
      <div className="ige-overview-wrapper">
        {/* Shared Sidebar Navigation */}
        <IgESidebar activeSection="Overview" />

        {/* Main Content */}
        <div className="ige-main-content-area">
          <div className="ige-overview-section">
            {/* Hero Heading */}
            <div className="ige-hero-heading">
              <div className="ige-badge-group">
                {badges.map((badge, index) => (
                  <span key={index} className="ige-overview-badge">{badge}</span>
                ))}
              </div>
              <h1 className="ige-project-overview-title">IgE</h1>
              <div className="ige-intro-group">
                <p className="ige-project-subtitle">건강 정보를 바탕으로 메뉴를 추천해주는 웹 서비스</p>
              </div>
            </div>

            {/* Hero Info Grid */}
            <div className="ige-hero-info-grid">
              <div className="ige-info-item">
                <span className="ige-info-label">ROLE</span>
                <div className="ige-info-content">
                  <span className="ige-info-primary">Team Leader</span>
                  <span className="ige-info-secondary">Backend, Frontend</span>
                </div>
              </div>
              <div className="ige-info-item">
                <span className="ige-info-label">DURATION</span>
                <div className="ige-info-content">
                  <span className="ige-info-primary">4 Months</span>
                  <span className="ige-info-secondary">2024.09 - 2024.12</span>
                </div>
              </div>
              <div className="ige-info-item">
                <span className="ige-info-label">TOOLS</span>
                <div className="ige-info-content">
                  <span className="ige-info-primary">Spring Boot, MySQL</span>
                  <span className="ige-info-secondary">Python, Kakao/Naver API</span>
                </div>
              </div>
              <div className="ige-info-item">
                <span className="ige-info-label">TEAM</span>
                <div className="ige-info-content">
                  <span className="ige-info-primary">2 Members</span>
                  <span className="ige-info-secondary">Leader 1, Member 1</span>
                </div>
              </div>
            </div>

            {/* Project Detail Grid */}
            <div className="ige-project-detail-grid">
              {/* Project Goal */}
              <div className="ige-detail-block">
                <h3 className="ige-block-title">Project Goal</h3>
                <div className="ige-goal-content">
                  <p className="ige-goal-text">사용자의 건강 데이터를 기반으로</p>
                  <p className="ige-goal-text ige-goal-highlight">알레르기 유발 식품을 필터링하여</p>
                  <p className="ige-goal-text">안전한 맞춤형 메뉴를 추천하자</p>
                </div>
              </div>

              {/* My Contributions */}
              <div className="ige-detail-block">
                <h3 className="ige-block-title">My Contributions</h3>
                <div className="ige-contributions-list">
                  <div className="ige-contribution-item">
                    <h4 className="ige-contrib-title">랜덤 메뉴 추천 알고리즘</h4>
                    <p className="ige-contrib-desc">사용자 알레르기 정보를 필터링하고 랜덤 메뉴를 제공하는 로직 구현</p>
                  </div>
                  <div className="ige-contribution-item">
                    <h4 className="ige-contrib-title">위치 기반 식당 안내</h4>
                    <p className="ige-contrib-desc">추천된 메뉴를 판매하는 주변 식당을 Kakao Map API로 시각화</p>
                  </div>
                  <div className="ige-contribution-item">
                    <h4 className="ige-contrib-title">데이터 파이프라인 구축</h4>
                    <p className="ige-contrib-desc">Python을 이용해 레시피 CSV 데이터를 가공하고 MySQL DB 구축</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IgEOverview;
