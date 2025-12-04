import React from 'react';
import '../../styles/IgE/IgESolution.css';
import IgESidebar from './IgESidebar';
import { useSlider } from '../../hooks/useSlider';
import { useFullScreen } from '../../hooks/useFullScreen';
import { FULLSCREEN_HINTS, PDF_CLASSES } from '../../utils/constants';
import { safeGet } from '../../utils/helpers';
import fullscreenIcon from '../../assets/icons/fullscreen_icon.svg';
import igeMapImg from '../../assets/image/IgE/IgEMap.png';
import igeRandomResultImg from '../../assets/image/IgE/IgERandomResult.png';
import igeGif from '../../assets/image/IgE/IgE.gif';

const webImages = [
  { id: 1, src: igeGif, label: '맞춤형 메뉴 추천 결과' },
  { id: 2, src: igeMapImg, label: '위치 기반 식당 검색' },
];

const IgESolution = () => {
  const { currentIndex, goNext, goPrev, goToIndex } = useSlider(webImages.length);
  const { isFullScreen, toggleFullScreen } = useFullScreen();

  const currentImage = safeGet(webImages, currentIndex);

  return (
    <section id="ige-solution" className="ige-solution-wrapper">
      <div className="ige-content-container">
        <IgESidebar activeSection="Solution" />
        
        <div className="ige-main-content">
          <section className="solution-hero">
            <span className="section-label">Solution</span>
            <h1 className="hero-heading">
              개인 건강 데이터 기반<br />
              <span className="highlight-text">맞춤형 메뉴 추천 시스템</span>
            </h1>
          </section>

          {/* Web UI Slider Section (MyBiz Result Style) */}
          <section className="ige-web-slider-section">
            {currentImage && (
              <div className={`ige-slider-container ${PDF_CLASSES.HIDDEN}`}>
                <button className="ige-slider-btn prev" onClick={goPrev} aria-label="Previous image">
                  ‹
                </button>
                
                <div className="ige-slider-content">
                  <img 
                    src={currentImage.src} 
                    alt={currentImage.label} 
                    className="ige-slider-image"
                  />
                  
                  {/* 캡션과 전체화면 버튼을 포함하는 하단 바 */}
                  <div className="ige-slider-bottom-bar">
                    <div className="ige-slider-caption">
                      {currentImage.label} ({currentIndex + 1}/{webImages.length})
                    </div>
                    <button 
                      className="ige-fullscreen-btn" 
                      onClick={toggleFullScreen} 
                      aria-label="View Fullscreen"
                    >
                      <img src={fullscreenIcon} alt="" />
                    </button>
                  </div>
                </div>

                <button className="ige-slider-btn next" onClick={goNext} aria-label="Next image">
                  ›
                </button>
              </div>
            )}

            <div className={`ige-slider-dots ${PDF_CLASSES.HIDDEN}`}>
              {webImages.map((_, index) => (
                <div 
                  key={index}
                  className={`ige-slider-dot ${currentIndex === index ? 'active' : ''}`}
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

            {/* PDF Generate View: All Images */}
            <div className={PDF_CLASSES.ONLY} style={{ width: '100%', marginTop: '20px' }}>
              {webImages.map((img) => (
                <div 
                  key={img.id} 
                  className={PDF_CLASSES.SEPARATE_PAGE} 
                  style={{ 
                    marginBottom: '40px', 
                    pageBreakInside: 'avoid',
                    breakInside: 'avoid'
                  }}
                >
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '10px', color: '#333' }}>
                    {img.label}
                  </h4>
                  <img 
                    src={img.src} 
                    alt={img.label} 
                    style={{ 
                      width: '100%', 
                      height: 'auto', 
                      borderRadius: '8px', 
                      border: '1px solid #eee' 
                    }} 
                  />
                </div>
              ))}
            </div>
          </section>

          <div className="solution-grid">
            <div className="solution-card">
              <h3 className="solution-title">알레르기 필터링 알고리즘</h3>
              <p className="solution-desc">
                사용자가 입력한 알레르기 정보(계란, 우유, 땅콩 등)를 바탕으로 데이터베이스의 레시피 정보를 실시간으로 필터링하여 안전한 메뉴만을 추천합니다.
              </p>
            </div>

            <div className="solution-card">
              <h3 className="solution-title">위치 기반 식당 매칭</h3>
              <p className="solution-desc">
                추천된 메뉴를 판매하는 주변 음식점을 Kakao Map API와 Naver Search API를 연동하여 지도상에 시각화하고 상세 정보를 제공합니다.
              </p>
            </div>

            <div className="solution-card">
              <h3 className="solution-title">건강 데이터 시각화</h3>
              <p className="solution-desc">
                IgE 수치 등 사용자의 건강 지표를 관리하고, 개인별 맞춤형 식단 계획을 수립할 수 있도록 돕는 대시보드를 제공합니다.
              </p>
            </div>

            <div className="solution-card">
              <h3 className="solution-title">간편한 회원가입 및 관리</h3>
              <p className="solution-desc">
                회원가입 시 간단한 체크박스로 알레르기 정보를 입력받아, 복잡한 설정 없이 즉시 개인화된 서비스를 이용할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullScreen && currentImage && (
        <div className="ige-fullscreen-modal" onClick={toggleFullScreen}>
          <div className="ige-fullscreen-hint">
            {FULLSCREEN_HINTS.CLOSE}
          </div>
          <div className="ige-fullscreen-content">
            <img 
              src={currentImage.src} 
              alt={currentImage.label} 
              className="ige-fullscreen-image"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default IgESolution;
