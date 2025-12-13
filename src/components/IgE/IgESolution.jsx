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

// ... imports ...

const WebCard = ({ image, index, total, isPdf, onFullScreen }) => {
  const { src, label } = image;
  
  if (isPdf) {
    return (
      <div 
        className={PDF_CLASSES.SEPARATE_PAGE} 
        style={{ 
          marginBottom: '40px', 
          pageBreakInside: 'avoid',
          breakInside: 'avoid'
        }}
      >
        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '10px', color: '#333' }}>
          {label}
        </h4>
        <img 
          src={src} 
          alt={label} 
          style={{ 
            width: '100%', 
            height: 'auto', 
            borderRadius: '8px', 
            border: '1px solid #eee' 
          }} 
        />
      </div>
    );
  }

  return (
    <div className="ige-slider-content">
      <img 
        src={src} 
        alt={label} 
        className="ige-slider-image"
      />
      
      <div className="ige-slider-bottom-bar">
        <div className="ige-slider-caption">
          {label} ({index + 1}/{total})
        </div>
        <button 
          className="ige-fullscreen-btn" 
          onClick={onFullScreen} 
          aria-label="View Fullscreen"
        >
          <img src={fullscreenIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

const IgESolution = () => {
  const { currentIndex, goNext, goPrev, goToIndex } = useSlider(webImages.length);
  const { isFullScreen, toggleFullScreen } = useFullScreen();

  const currentImage = safeGet(webImages, currentIndex);

  return (
    <section id="ige-solution" className="ige-solution-wrapper">
      <div className="ige-content-container">
        <IgESidebar activeSection="Solution" />
        
        <div className="ige-main-content">
          <section className="ige-solution-hero">
            <span className="ige-section-label">Solution</span>
            <h1 className="ige-hero-heading">
              개인 건강 데이터 기반<br />
              <span className="ige-highlight-text">맞춤형 메뉴 추천 시스템</span>
            </h1>
          </section>

          {/* Web UI Slider Section */}
          <section className="ige-web-slider-section">
            {currentImage && (
              <div className={`ige-slider-container ${PDF_CLASSES.HIDDEN}`}>
                <button className="ige-slider-btn prev" onClick={goPrev} aria-label="Previous image">
                  ‹
                </button>
                
                <WebCard 
                  image={currentImage} 
                  index={currentIndex} 
                  total={webImages.length} 
                  onFullScreen={toggleFullScreen}
                />

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
              {webImages.map((img, index) => (
                <WebCard 
                  key={img.id}
                  image={img}
                  index={index}
                  total={webImages.length}
                  isPdf={true}
                  onFullScreen={toggleFullScreen}
                />
              ))}
            </div>
          </section>

          <div className="ige-solution-grid">
            <div className="ige-solution-card">
              <h3 className="ige-solution-title">알레르기 필터링 알고리즘</h3>
              <p className="ige-solution-desc">
                사용자가 입력한 알레르기 정보(계란, 우유, 땅콩 등)를 바탕으로 데이터베이스의 레시피 정보를 실시간으로 필터링하여 안전한 메뉴만을 추천합니다.
              </p>
            </div>

            <div className="ige-solution-card">
              <h3 className="ige-solution-title">위치 기반 식당 매칭</h3>
              <p className="ige-solution-desc">
                추천된 메뉴를 판매하는 주변 음식점을 Kakao Map API와 Naver Search API를 연동하여 지도상에 시각화하고 상세 정보를 제공합니다.
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
