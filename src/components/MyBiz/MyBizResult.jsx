import React from 'react';
import '../../styles/MyBiz/MyBizResult.css';
import MyBizSidebar from './MyBizSidebar';
import { useSlider } from '../../hooks/useSlider';
import { useFullScreen } from '../../hooks/useFullScreen';
import { FULLSCREEN_HINTS, PDF_CLASSES } from '../../utils/constants';
import { safeGet } from '../../utils/helpers';
import trophyIcon from '../../assets/icons/trophy-icon.svg';
import fullscreenIcon from '../../assets/icons/fullscreen_icon.svg';
import webMainImg from '../../assets/image/MyBiz/MyBizWebMain.png';
import webReviewImg from '../../assets/image/MyBiz/MyBizWebReviewAnalyze.png';
import webSalesImg from '../../assets/image/MyBiz/MyBizWebSalesAnalyze.png';

  const designImages = [
    { id: 1, src: webMainImg, label: 'Web Main Dashboard' },
    { id: 2, src: webReviewImg, label: 'Review Analysis UI' },
    { id: 3, src: webSalesImg, label: 'Sales Analysis UI' },
  ];

const MyBizResult = () => {
  const { currentIndex, goNext, goPrev, goToIndex } = useSlider(designImages.length);
  const { isFullScreen, toggleFullScreen } = useFullScreen();

  const currentImage = safeGet(designImages, currentIndex);

  return (
    <div id="mybiz-result" className="mybiz-result-container">
      <div className="result-wrapper">
        {/* Sidebar specific to this page layout */}
        <MyBizSidebar activeSection="Result & Learning" />

        {/* Main Content Area */}
        <main className="result-main-content">
          
          {/* Result Section */}
          <section className="result-section">
            <div className="section-header">
              <div className="section-label">RESULT & IMPACT</div>
              <h2 className="section-title">데이터로 증명한 성과</h2>
            </div>
            
            <div className="award-box">
              <img src={trophyIcon} alt="Trophy" width="20" height="20" />
              <span className="award-text">제2회 교내 해커톤 대회 - 아이디어상 수상</span>
            </div>

            {/* Key Metrics Emphasis Style */}
            <div className="result-card-metrics">
              <div className="card-label">QUANTITATIVE</div>
              
              <div className="metrics-grid">
                {/* Metric 1: Speed */}
                <div className="metric-item">
                  <div className="metric-value">8 <span className="metric-unit">Weeks</span></div>
                  <div className="metric-label">Rapid MVP Development</div>
                  <p className="metric-desc">아이디어 기획부터 배포까지<br/>2개월 내 전 과정 완주</p>
                </div>

                {/* Metric 2: Scope */}
                <div className="metric-divider"></div> {/* 세로 구분선 */}

                <div className="metric-item">
                  <div className="metric-value">100<span className="metric-unit">%</span></div>
                  <div className="metric-label">End-to-End Ownership</div>
                  <p className="metric-desc">기획 • 디자인 • 개발 • 배포<br/>프로덕트 생명주기 A to Z 리딩</p>
                </div>
              </div>
            </div>
          </section>

          <div className="result-divider" />

          {/* Learning Section */}
          <section className="result-section">
            <div className="section-header">
              <div className="section-label">RETROSPECTIVE</div>
              <h2 className="section-title-sm">성장 포인트</h2>
            </div>

            <div className="learning-grid">
              <div className="learning-card">
                <h3 className="learning-title">Leadership</h3>
                <p className="learning-desc">
                  PL로서 개발자와의 소통, 일정 조율을 주도하며 설득력 있는 커뮤니케이션 역량을 길렀습니다.
                </p>
              </div>
              <div className="learning-card">
                <h3 className="learning-title">AI-Native</h3>
                <p className="learning-desc">
                  GPT-4 API 특성을 이해하고 UX에 녹여내며, 기술 이해도가 디자인 효율에 미치는 영향을 체감했습니다.
                </p>
              </div>
            </div>
          </section>

          {/* Design Section */}
          <section className="result-section" style={{ marginBottom: 0 }}>
            <div className="section-header">
              <div className="design-header-sub">NEXT STEP</div>
              <h2 className="section-title-sm">Design Exploration</h2>
              <p className="design-desc">
                디자인 및 개발 능력 향상을 위한 Web UI 스터디 작업물{'\n'}
                모바일 만으로는 PC 사용자의 니즈를 만족할 수 없을 것 같다라는 생각을 시작으로 web을 디자인과 제작해보았습니다.
              </p>
            </div>

            <div className={`slider-container ${PDF_CLASSES.HIDDEN}`}>
              <button className="slider-btn prev" onClick={goPrev} aria-label="Previous image">
                ‹
              </button>
              
              {currentImage && (
              <div className="slider-content">
                <img 
                    src={currentImage.src} 
                    alt={currentImage.label} 
                  className="slider-image"
                />
                
                {/* 캡션과 전체화면 버튼을 포함하는 하단 바 */}
                <div className="slider-bottom-bar">
                  <div className="slider-caption">
                      {currentImage.label} ({currentIndex + 1}/{designImages.length})
                  </div>
                    <button 
                      className="fullscreen-btn" 
                      onClick={toggleFullScreen} 
                      aria-label="View Fullscreen"
                    >
                    <img src={fullscreenIcon} alt="" />
                  </button>
                </div>
              </div>
              )}

              <button className="slider-btn next" onClick={goNext} aria-label="Next image">
                ›
              </button>
            </div>

            {/* PDF Generate View: All Images */}
            <div className={PDF_CLASSES.ONLY} style={{ width: '100%', marginTop: '20px' }}>
              {designImages.map((img) => (
                <div 
                  key={img.id} 
                  className={PDF_CLASSES.SEPARATE_PAGE} 
                  style={{ marginBottom: '40px', pageBreakInside: 'avoid' }}
                >
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '10px', color: '#333' }}>
                    {img.label}
                  </h4>
                   <img 
                    src={img.src} 
                    alt={img.label} 
                    style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #eee' }} 
                   />
                </div>
              ))}
            </div>

            <div className={`slider-dots ${PDF_CLASSES.HIDDEN}`}>
              {designImages.map((_, index) => (
                <div 
                  key={index}
                  className={`slider-dot ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => goToIndex(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to slide ${index + 1}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      goToIndex(index);
                    }
                  }}
                />
              ))}
            </div>
            
            {/* Fullscreen Modal */}
            {isFullScreen && currentImage && (
              <div className="fullscreen-modal" onClick={toggleFullScreen}>
                <div className="fullscreen-hint">
                  {FULLSCREEN_HINTS.CLOSE}
                </div>
                <div className="fullscreen-content">
                  <img 
                    src={currentImage.src} 
                    alt={currentImage.label} 
                    className="fullscreen-image"
                  />
                </div>
              </div>
            )}
          </section>

        </main>
      </div>
    </div>
  );
};

export default MyBizResult;
