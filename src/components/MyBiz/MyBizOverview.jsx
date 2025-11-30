import React from 'react';
import '../../styles/MyBiz/MyBizOverview.css';
import MyBizSidebar from './MyBizSidebar';
import trophyIcon from '../../assets/icons/trophy-icon.svg'
const MyBizOverview = () => {
  const badges = ['Mobile App', 'AI Assistant', 'Web Design'];

  return (
    <section id="mybiz-overview" className="mybiz-overview-container">
      <div className="overview-wrapper">
        {/* Shared Sidebar Navigation */}
        <MyBizSidebar activeSection="Overview" />

        {/* Main Content */}
        <div className="main-content-area">
          <div className="overview-section">
            {/* Hero Heading */}
            <div className="hero-heading">
              <div className="badge-group">
                {badges.map((badge, index) => (
                  <span key={index} className="overview-badge">{badge}</span>
                ))}
              </div>
              <h1 className="project-overview-title">MyBiz (마이비즈)</h1>
              <div className="intro-group">
                <p className="project-subtitle">소상공인을 위한 AI 경영 도우미</p>
                <div className="award-badge">
                  <div className="award-icon">
                    <img src={trophyIcon} alt="Trophy icon" />
                  </div>
                  <span className="award-text">제2회 교내 해커톤 대회 - 아이디어상 수상</span>
                </div>
              </div>
            </div>

            {/* Hero Info Grid */}
            <div className="hero-info-grid">
              <div className="info-item">
                <span className="info-label">ROLE</span>
                <div className="info-content">
                  <span className="info-primary">Project Reader&PD</span>
                  <span className="info-secondary">Backend</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-label">DURATION</span>
                <div className="info-content">
                  <span className="info-primary">8 Week</span>
                  <span className="info-secondary">2025.07 - 2025.09</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-label">TOOLS</span>
                <div className="info-content">
                  <span className="info-primary">Node.js, Figma</span>
                  <span className="info-secondary">Flutter, SupaBase</span>
                </div>
              </div>
              <div className="info-item">
                <span className="info-label">TEAM</span>
                <div className="info-content">
                  <span className="info-primary">5 Members</span>
                  <span className="info-secondary">Des 1, BE 2, FE2</span>
                </div>
              </div>
            </div>

            {/* Project Detail Grid */}
            <div className="project-detail-grid">
              {/* Project Goal */}
              <div className="detail-block">
                <h3 className="block-title">Project Goal</h3>
                <div className="goal-content">
                  <p className="goal-text">디지털 취약 계층인 소상공인이</p>
                  <p className="goal-text goal-highlight">전문 지식 없이도</p>
                  <p className="goal-text">매장 데이터를 활용하게 하자</p>
                </div>
              </div>

              {/* My Contributions */}
              <div className="detail-block">
                <h3 className="block-title">My Contributions</h3>
                <div className="contributions-list">
                  <div className="contribution-item">
                    <h4 className="contrib-title">문제 정의</h4>
                    <p className="contrib-desc">소상공인의 '시간, 비용, 전문성' 부족문제</p>
                  </div>
                  <div className="contribution-item">
                    <h4 className="contrib-title">AI 기반 UX 설계</h4>
                    <p className="contrib-desc">진입장벽을 낮춘 User Flow와 ChatGPT Chat</p>
                  </div>
                  <div className="contribution-item">
                    <h4 className="contrib-title">데이터 시각화 UI</h4>
                    <p className="contrib-desc">직관적인 매출/리뷰 데이터 시각화 대시보드</p>
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

export default MyBizOverview;
