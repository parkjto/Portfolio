import React from 'react';
import '../../styles/MyBiz/MyBizOverview.css';
import MyBizSidebar from './MyBizSidebar';
import trophyIcon from '../../assets/icons/trophy-icon.svg'
import githubIcon from '../../assets/icons/github-icon.svg';

const MyBizOverview = () => {
  const badges = ['Mobile App', 'AI Assistant', 'Web Design'];

  return (
    <section id="mybiz-overview" className="mybiz-overview-container">
      <div className="mybiz-overview-wrapper">
        {/* Shared Sidebar Navigation */}
        <MyBizSidebar activeSection="Overview" />

        {/* Main Content */}
        <div className="mybiz-main-content-area">
          <div className="mybiz-overview-section">
            {/* Hero Heading */}
            <div className="mybiz-hero-heading">
              <div className="mybiz-badge-group">
                {badges.map((badge, index) => (
                  <span key={index} className="mybiz-overview-badge">{badge}</span>
                ))}
              </div>
              <h1 className="mybiz-project-overview-title">MyBiz (마이비즈)</h1>
              <div className="mybiz-intro-group">
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <p className="mybiz-project-subtitle" style={{ margin: 0 }}>소상공인을 위한 AI 경영 도우미</p>
                  <a href="https://github.com/parkjto/MyBiz_Front_Flutter" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={githubIcon} alt="GitHub" style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
                  </a>
                </div>
                <div className="mybiz-award-badge">
                  <div className="mybiz-award-icon">
                    <img src={trophyIcon} alt="Trophy icon" />
                  </div>
                  <span className="mybiz-award-text">제2회 교내 해커톤 대회 - 아이디어상 수상</span>
                </div>
              </div>
            </div>

            {/* Hero Info Grid */}
            <div className="mybiz-hero-info-grid">
              <div className="mybiz-info-item">
                <span className="mybiz-info-label">ROLE</span>
                <div className="mybiz-info-content">
                  <span className="mybiz-info-primary">Project Reader&PD</span>
                  <span className="mybiz-info-secondary">Backend</span>
                </div>
              </div>
              <div className="mybiz-info-item">
                <span className="mybiz-info-label">DURATION</span>
                <div className="mybiz-info-content">
                  <span className="mybiz-info-primary">8 Week</span>
                  <span className="mybiz-info-secondary">2025.07 - 2025.09</span>
                </div>
              </div>
              <div className="mybiz-info-item">
                <span className="mybiz-info-label">TOOLS</span>
                <div className="mybiz-info-content">
                  <span className="mybiz-info-primary">Node.js, Figma</span>
                  <span className="mybiz-info-secondary">Flutter, SupaBase</span>
                </div>
              </div>
              <div className="mybiz-info-item">
                <span className="mybiz-info-label">TEAM</span>
                <div className="mybiz-info-content">
                  <span className="mybiz-info-primary">5 Members</span>
                  <span className="mybiz-info-secondary">Des 1, BE 2, FE2</span>
                </div>
              </div>
            </div>

            {/* Project Detail Grid */}
            <div className="mybiz-project-detail-grid">
              {/* Project Goal */}
              <div className="mybiz-detail-block">
                <h3 className="mybiz-block-title">Project Goal</h3>
                <div className="mybiz-goal-content">
                  <p className="mybiz-goal-text">디지털 취약 계층인 소상공인이</p>
                  <p className="mybiz-goal-text mybiz-goal-highlight">전문 지식 없이도</p>
                  <p className="mybiz-goal-text">매장 데이터를 활용하게 하자</p>
                </div>
              </div>

              {/* My Contributions */}
              <div className="mybiz-detail-block">
                <h3 className="mybiz-block-title">My Contributions</h3>
                <div className="mybiz-contributions-list">
                  <div className="mybiz-contribution-item">
                    <h4 className="mybiz-contrib-title">문제 정의</h4>
                    <p className="mybiz-contrib-desc">소상공인의 '시간, 비용, 전문성' 부족문제</p>
                  </div>
                  <div className="mybiz-contribution-item">
                    <h4 className="mybiz-contrib-title">AI 기반 UX 설계</h4>
                    <p className="mybiz-contrib-desc">진입장벽을 낮춘 User Flow와 ChatGPT Chat</p>
                  </div>
                  <div className="mybiz-contribution-item">
                    <h4 className="mybiz-contrib-title">데이터 시각화 UI</h4>
                    <p className="mybiz-contrib-desc">직관적인 매출/리뷰 데이터 시각화 대시보드</p>
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
