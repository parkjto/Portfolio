import React from 'react';
import '../../styles/Naru/NaruProblem.css';
import NaruSidebar from './NaruSidebar';

const NaruProblem = () => {
  return (
    <section id="naru-problem" className="naru-problem-wrapper">
      {/* Shared Sidebar Navigation */}
       <NaruSidebar activeSection="Problem" />
       
      {/* Main Content */}
      <div className="naru-main-content">
        
        {/* Hero Section */}
        <section className="naru-problem-hero">
          <span className="naru-section-label">Problem Definition</span>
          <h1 className="naru-hero-heading">
            기존 맛집 정보 서비스의<br />
            신뢰도 하락과 피로감
          </h1>
        </section>

        {/* Discovery Process Grid */}
        <section className="naru-discovery-section">
          <h2 className="naru-problem-section-title">Discovery Process</h2>
          <div className="naru-discovery-grid">
            {/* Card 01 */}
            <div className="naru-discovery-card">
              <div className="naru-discovery-number">01</div>
              <div className="naru-discovery-divider"></div>
              <h3 className="naru-discovery-title">Observation</h3>
              <p className="naru-discovery-body">
                SNS와 블로그의 광고성 리뷰로 인해 사용자들이 '진짜 맛집'을 찾는 데 어려움을 겪고 있음을 발견했습니다.
              </p>
            </div>

            {/* Card 02 */}
            <div className="naru-discovery-card">
              <div className="naru-discovery-number">02</div>
              <div className="naru-discovery-divider"></div>
              <h3 className="naru-discovery-title">User Research</h3>
              <p className="naru-discovery-body">
                위치 기반 검색 시 불필요한 정보(카페, 디저트 등)가 혼재되어 있어 검색 효율이 떨어진다는 점을 파악했습니다.
          </p>
        </div>

            {/* Card 03 */}
            <div className="naru-discovery-card">
              <div className="naru-discovery-number">03</div>
              <div className="naru-discovery-divider"></div>
              <h3 className="naru-discovery-title">Market Analysis</h3>
              <p className="naru-discovery-body">
                개인의 취향을 고려하지 않는 단순 랭킹 시스템은 사용자 만족도를 저하시키는 주요 원인임을 확인했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* User Pain Points Grid */}
        <section className="naru-pain-section">
          <h2 className="naru-problem-section-title">User Pain Points</h2>
            <div className="naru-pain-grid">
            {/* Pain Card 1: Trust */}
                <div className="naru-pain-card">
                    <div className="naru-pain-icon-wrapper">
                {/* SVG Icon: Shield/Trust */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                    </div>
                    <div className="naru-pain-content-inner">
                <h3 className="naru-pain-title">신뢰 부족</h3>
                <span className="naru-pain-label">Lack of Trust</span>
                        <p className="naru-pain-body">
                  "블로그 리뷰는 대부분 광고 같아서 믿을 수가 없어요. 진짜 후기를 찾기가 너무 힘듭니다."
                        </p>
                    </div>
                </div>

            {/* Pain Card 2: Fatigue */}
                <div className="naru-pain-card">
                    <div className="naru-pain-icon-wrapper">
                {/* SVG Icon: Search/Fatigue */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                    </div>
                    <div className="naru-pain-content-inner">
                <h3 className="naru-pain-title">검색 피로</h3>
                <span className="naru-pain-label">Search Fatigue</span>
                        <p className="naru-pain-body">
                  "메뉴를 정하고 식당을 찾는 과정이 너무 번거롭고, 정보가 너무 많아서 선택하기 어렵습니다."
                        </p>
                    </div>
                </div>

            {/* Pain Card 3: Personalization */}
                <div className="naru-pain-card">
                    <div className="naru-pain-icon-wrapper">
                {/* SVG Icon: User/Personal */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                    </div>
                    <div className="naru-pain-content-inner">
                <h3 className="naru-pain-title">개인화 부재</h3>
                <span className="naru-pain-label">No Personalization</span>
                        <p className="naru-pain-body">
                  "내 입맛에 맞는 식당을 추천받고 싶은데, 기존 앱들은 단순 거리순이나 평점순으로만 보여줍니다."
                        </p>
                    </div>
                </div>
            </div>
        </section>

      </div>
    </section>
  );
};

export default NaruProblem;
