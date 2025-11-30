import React from 'react';
import '../../styles/Naru/NaruOverview.css';
import NaruSidebar from './NaruSidebar';
import githubIcon from '../../assets/icons/github-icon.svg';
// import trophyIcon from '../../assets/icons/trophy-icon.svg'; // Trophy icon if needed

const NaruOverview = () => {
  const badges = ['Mobile App', 'AI', 'Map'];

  return (
    <section id="naru-overview" className="naru-overview-container">
      <div className="naru-overview-wrapper">
        {/* Shared Sidebar Navigation */}
        <NaruSidebar activeSection="Overview" />

        {/* Main Content */}
        <div className="naru-main-content-area">
          <div className="naru-overview-section">
            {/* Hero Heading */}
            <div className="naru-hero-heading">
              <div className="naru-badge-group">
                {badges.map((badge, index) => (
                  <span key={index} className="naru-overview-badge">{badge}</span>
                ))}
              </div>
              <h1 className="naru-project-overview-title">나루나루 (NaruNaru)</h1>
              <div className="naru-intro-group">
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <p className="naru-project-subtitle" style={{ margin: 0 }}>현재 위치 기반 맛집 추천 서비스</p>
                  <a href="https://github.com/parkjto/NaruNaru" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={githubIcon} alt="GitHub" style={{ width: '24px', height: '24px', cursor: 'pointer' }} />
                  </a>
                </div>
                {/* Award badge placeholder if needed */}
                {/* <div className="naru-award-badge">
                   <div className="naru-award-icon">
                    <img src={trophyIcon} alt="Trophy icon" />
                  </div>
                  <span className="naru-award-text">Team 빽김 (Bbaek-Kim) Project</span>
                </div> */}
              </div>
            </div>

            {/* Hero Info Grid */}
            <div className="naru-hero-info-grid">
              <div className="naru-info-item">
                <span className="naru-info-label">ROLE</span>
                <div className="naru-info-content">
                  <span className="naru-info-primary">Frontend Developer</span>
                  <span className="naru-info-secondary">Flutter App Development</span>
                </div>
              </div>
              <div className="naru-info-item">
                <span className="naru-info-label">DURATION</span>
                <div className="naru-info-content">
                  <span className="naru-info-primary">Project Duration</span>
                  <span className="naru-info-secondary">2025.03 - 2025.06</span>
                </div>
              </div>
              <div className="naru-info-item">
                <span className="naru-info-label">TOOLS</span>
                <div className="naru-info-content">
                  <span className="naru-info-primary">Flutter, Node.js, MongoDB, Figma</span>
                  <span className="naru-info-secondary">Kakao Map API, Dart</span>
                </div>
              </div>
              <div className="naru-info-item">
                <span className="naru-info-label">TEAM</span>
                <div className="naru-info-content">
                  <span className="naru-info-primary">3 Members</span>
                  <span className="naru-info-secondary">FE 1, BE 1, Fullstack 1</span>
                </div>
              </div>
            </div>

            {/* Project Detail Grid */}
            <div className="naru-project-detail-grid">
              {/* Project Introduction */}
              <div className="naru-detail-block">
                <h3 className="naru-block-title">프로젝트 소개</h3>
                <div className="naru-goal-content">
                  <p className="naru-goal-text" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    현재 위치 기반 주변 2-5km 반경 내 음식점을 찾고, 리뷰하고, 공유할 수 있는 맛집 추천 서비스입니다. 
                    카카오맵 API와 연동하여 실시간 위치 기반 정보를 제공하고, 사용자 선호도 기반 맞춤형 추천을 제공합니다.
                  </p>
                </div>
              </div>

              {/* 담당 역할 */}
              <div className="naru-detail-block">
                <h3 className="naru-block-title">담당 역할</h3>
                <div className="naru-contributions-list">
                  <div className="naru-contribution-item">
                    <h4 className="naru-contrib-title">사용자 인증 시스템</h4>
                    <p className="naru-contrib-desc">회원가입/로그인, 소셜 로그인 시스템 구현 및 사용자 인증 처리</p>
                  </div>
                  <div className="naru-contribution-item">
                    <h4 className="naru-contrib-title">메인 화면 및 리스트</h4>
                    <p className="naru-contrib-desc">메인 화면 탭 네비게이션 및 카테고리별 음식점 리스트 구현</p>
                  </div>
                  <div className="naru-contribution-item">
                    <h4 className="naru-contrib-title">검색 및 필터링</h4>
                    <p className="naru-contrib-desc">위치 기반 검색 및 다중 정렬(거리/좋아요/리뷰순), 실시간 필터 적용</p>
                  </div>
                  <div className="naru-contribution-item">
                    <h4 className="naru-contrib-title">모바일 앱 개발</h4>
                    <p className="naru-contrib-desc">Flutter 기반 모바일 앱 전체 프론트엔드 개발 담당</p>
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

export default NaruOverview;
