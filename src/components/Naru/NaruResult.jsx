import React from 'react';
import '../../styles/Naru/NaruResult.css';
import NaruSidebar from './NaruSidebar';
import trophyIcon from '../../assets/icons/trophy-icon.svg';

const NaruResult = () => {
  return (
    <div id="naru-result" className="naru-result-container">
      <div className="naru-result-wrapper">
        {/* Sidebar specific to this page layout */}
        <NaruSidebar activeSection="Result & Future" />
        
        {/* Main Content Area */}
        <main className="naru-result-main-content">
          
          {/* Result Section */}
          <section className="naru-result-section">
            <div className="naru-section-header">
              <div className="naru-section-label">RESULT & IMPACT</div>
              <h2 className="naru-section-title">프로젝트 성과</h2>
            </div>
            
            {/* Award Box - Optional */}
            {/* <div className="naru-award-box">
              <img src={trophyIcon} alt="Trophy" width="20" height="20" />
              <span className="naru-award-text">성과 텍스트 입력</span>
            </div> */}

            {/* Key Metrics Emphasis Style */}
            <div className="naru-result-card-metrics">
              <div className="naru-card-label">QUANTITATIVE</div>
              
              <div className="naru-metrics-grid">
                {/* Metric 1 */}
                <div className="naru-metric-item">
                  <div className="naru-metric-value">3 <span className="naru-metric-unit">Months</span></div>
                  <div className="naru-metric-label">Development Period</div>
                  <p className="naru-metric-desc">기획부터 개발까지<br/>3개월 간의 프로젝트 진행</p>
                </div>

                {/* Metric 2 */}
                <div className="naru-metric-divider"></div>

                <div className="naru-metric-item">
                  <div className="naru-metric-value">100<span className="naru-metric-unit">%</span></div>
                  <div className="naru-metric-label">Frontend Ownership</div>
                  <p className="naru-metric-desc">Flutter 앱 화면 구현 및<br/>상태 관리 로직 100% 담당</p>
                </div>
                </div>
            </div>
          </section>

          <div className="naru-result-divider" />

          {/* Learning Section */}
          <section className="naru-result-section">
            <div className="naru-section-header">
              <div className="naru-section-label">RETROSPECTIVE</div>
              <h2 className="naru-section-title-sm">성장 포인트</h2>
            </div>

            <div className="naru-learning-grid">
              <div className="naru-learning-card">
                <h3 className="naru-learning-title">Cross-Platform</h3>
                <p className="naru-learning-desc">
                  Flutter를 사용하여 Android/iOS 크로스 플랫폼 개발 환경을 구축하고, 단일 코드베이스의 효율성을 경험했습니다.
                </p>
              </div>
              <div className="naru-learning-card">
                <h3 className="naru-learning-title">API Integration</h3>
                <p className="naru-learning-desc">
                  Kakao Map API와 백엔드 REST API를 연동하며 비동기 데이터 처리와 에러 핸들링 노하우를 쌓았습니다.
                </p>
              </div>
              <div className="naru-learning-card">
                <h3 className="naru-learning-title">User Experience</h3>
                <p className="naru-learning-desc">
                  위치 기반 서비스의 특성을 고려하여 로딩 속도 최적화와 직관적인 마커 클러스터링 UX를 고민했습니다.
                </p>
              </div>
            </div>
          </section>

          {/* Design/Future Section 제거 (내용 삭제) */}

        </main>
      </div>
    </div>
  );
};

export default NaruResult;
