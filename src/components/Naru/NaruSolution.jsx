import React, { useState, useEffect } from 'react';
import '../../styles/Naru/NaruSolution.css';
import NaruSidebar from './NaruSidebar';
import fullscreenIcon from '../../assets/icons/fullscreen_icon.svg';
import naruMapImage from '../../assets/image/Naru/NaruMapMarker.png';
import naruFilterImage from '../../assets/image/Naru/Narufilter.png';
import naruHomeImage from '../../assets/image/Naru/NaruHome.png';
import naruAIImage from '../../assets/image/Naru/NaruAIRecommand.png';

const mobileScreens = [
    {
      id: 1,
    label: 'Map',
    title: '위치 기반 맛집 검색',
    subtitle: '내 주변 맛집 탐색',
    description:
      '카카오맵 API를 활용하여 현재 위치 기준 2~5km 반경 내의 맛집 정보를 지도상에 표시합니다. 직관적인 마커와 클러스터링으로 주변 식당을 쉽게 찾을 수 있습니다.',
    tag: 'Kakao Map API',
    },
    {
      id: 2,
    label: 'Filter',
    title: '스마트 필터링',
    subtitle: '카테고리 및 정렬 옵션',
    description:
      '한식, 중식, 일식 등 음식 종류별 필터링과 거리순, 평점순, 리뷰순 정렬 기능을 제공하여 사용자가 원하는 조건의 맛집을 빠르게 선별할 수 있습니다.',
    tag: 'Smart Filter',
    },
    {
      id: 3,
    label: 'Review',
    title: 'SNS 스타일 리뷰',
    subtitle: '사진 중심의 리뷰 공유',
    description:
      '인스타그램 스타일의 피드형 리뷰 시스템을 도입했습니다. 맛있는 음식 사진과 솔직한 후기를 공유하고, 좋아요와 댓글로 다른 사용자와 소통할 수 있습니다.',
    tag: 'SNS Style Review',
    },
    {
      id: 4,
    label: 'AI Pick',
    title: 'AI 맞춤 추천',
    subtitle: '취향 분석 기반 추천',
    description:
      '사용자의 평점 기록과 선호 카테고리를 분석하여 개인화된 맛집을 추천해줍니다. "오늘 뭐 먹지?" 고민될 때 AI가 딱 맞는 메뉴를 제안합니다.',
    tag: 'Personalized AI',
  },
];

const NaruSolution = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const total = mobileScreens.length;

  const goNext = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const getSlideClass = (index) => {
    if (index === currentIndex) return 'naru-mobile-slide-active';
    const prevIndex = currentIndex === 0 ? total - 1 : currentIndex - 1;
    const nextIndex = currentIndex === total - 1 ? 0 : currentIndex + 1;

    if (index === prevIndex) return 'naru-mobile-slide-prev';
    if (index === nextIndex) return 'naru-mobile-slide-next';
    return 'naru-mobile-slide-hidden';
  };

  const toggleFullScreen = () => {
    setIsFullScreen((prev) => !prev);
  };

  // ESC 키로 전체화면 닫기
  useEffect(() => {
    if (!isFullScreen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' || event.key === 'Esc') {
        setIsFullScreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullScreen]);

  return (
    <section id="naru-solution" className="naru-mobile-showcase-container">
      <div className="naru-mobile-showcase-wrapper">
        {/* Shared Sidebar Navigation */}
        <NaruSidebar activeSection="Solution" />
        
        {/* Main Content */}
        <main className="naru-mobile-showcase-main">
          <header className="naru-mobile-showcase-header">
                <span className="naru-header-label">KEY FEATURES</span>
                <h2 className="naru-header-title">주요 기능 소개</h2>
                <p className="naru-header-description">
                    나루나루가 제공하는 핵심적인 기능들을 소개합니다.
                </p>
          </header>

            <div className="naru-mobile-slider">
            <button
              className="naru-mobile-slider-btn prev"
              type="button"
              onClick={goPrev}
              aria-label="Previous screen"
            >
              ‹
            </button>

                <div className="naru-mobile-slider-viewport">
              {mobileScreens.map((screen, index) => (
                <article
                  key={screen.id}
                  className={`naru-mobile-card naru-mobile-slide ${getSlideClass(index)}`}
                >
                                <div className="naru-mobile-card-inner">
                                    <div className="naru-mobile-card-text">
                                        <div className="naru-mobile-card-label-row">
                        <span className="naru-mobile-card-index">
                          {String(screen.id).padStart(2, '0')}
                        </span>
                        <span className="naru-mobile-card-chip">{screen.tag}</span>
                      </div>
                      <h3 className="naru-mobile-card-title">
                        <span className="naru-mobile-card-title-label">{screen.label}</span>
                        {screen.title}
                      </h3>
                      <p className="naru-mobile-card-subtitle">{screen.subtitle}</p>
                      <p className="naru-mobile-card-description">{screen.description}</p>
                    </div>

                    <div className="naru-mobile-card-phone">
                      {screen.id === 1 ? ( // Map
                        <div className="naru-mobile-screen-image-wrapper">
                          <img 
                            src={naruMapImage} 
                            alt={screen.title} 
                            className="naru-mobile-screen-image"
                          />
                          <button
                            type="button"
                            className="naru-mobile-fullscreen-btn"
                            onClick={toggleFullScreen}
                            aria-label="View screen fullscreen"
                          >
                            <img src={fullscreenIcon} alt="" />
                          </button>
                        </div>
                      ) : screen.id === 2 ? ( // Filter
                        <div className="naru-mobile-screen-image-wrapper">
                           <img 
                            src={naruFilterImage} 
                            alt={screen.title} 
                            className="naru-mobile-screen-image"
                          />
                          <button
                            type="button"
                            className="naru-mobile-fullscreen-btn"
                            onClick={toggleFullScreen}
                            aria-label="View screen fullscreen"
                          >
                            <img src={fullscreenIcon} alt="" />
                          </button>
                        </div>
                      ) : screen.id === 3 ? ( // Review - Scrollable
                        <div className="naru-mobile-screen-image-wrapper naru-mobile-screen-scrollable">
                          <div className="naru-mobile-screen-scroll-container">
                            <img 
                              src={naruHomeImage} 
                              alt={screen.title} 
                              className="naru-mobile-screen-image naru-mobile-screen-scroll-image"
                            />
                                        </div>
                          <button
                            type="button"
                            className="naru-mobile-fullscreen-btn"
                            onClick={toggleFullScreen}
                            aria-label="View screen fullscreen"
                          >
                            <img src={fullscreenIcon} alt="" />
                          </button>
                                        </div>
                      ) : screen.id === 4 ? ( // AI Pick
                        <div className="naru-mobile-screen-image-wrapper">
                          <img 
                            src={naruAIImage} 
                            alt={screen.title} 
                            className="naru-mobile-screen-image"
                          />
                          <button
                            type="button"
                            className="naru-mobile-fullscreen-btn"
                            onClick={toggleFullScreen}
                            aria-label="View screen fullscreen"
                          >
                            <img src={fullscreenIcon} alt="" />
                          </button>
                                    </div>
                      ) : (
                                        <div className="naru-phone-frame">
                                            <div className="naru-phone-notch"></div>
                                            <div className="naru-phone-screen-placeholder">
                            <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#888', marginBottom: '8px' }}>
                              SCREENSHOT
                            </span>
                            <span style={{ fontSize: '11px', color: '#aaa' }}>
                                                    (이미지 준비중)
                            </span>
                                                </div>
                                            </div>
                      )}
                                        </div>
                                    </div>
                </article>
              ))}
            </div>

            <button
              className="naru-mobile-slider-btn next"
              type="button"
              onClick={goNext}
              aria-label="Next screen"
            >
              ›
            </button>
            
            {/* Slider Dots */}
            <div className="naru-slider-dots">
              {mobileScreens.map((screen, index) => (
                <div
                  key={screen.id}
                  className={`naru-slider-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
                                </div>
                            </div>
        </main>
      </div>

      {isFullScreen && (
        <div className="naru-fullscreen-modal" onClick={toggleFullScreen}>
          <div className="naru-fullscreen-hint">
            ESC를 눌러 전체화면 보기를 끌 수 있습니다
          </div>
          <div className="naru-fullscreen-content">
             {/* Render Fullscreen Image based on currentIndex */}
             {mobileScreens[currentIndex].id === 1 ? (
                <img 
                  src={naruMapImage} 
                  alt={mobileScreens[currentIndex].title} 
                  className="naru-fullscreen-image"
                />
             ) : mobileScreens[currentIndex].id === 2 ? (
                <img 
                  src={naruFilterImage} 
                  alt={mobileScreens[currentIndex].title} 
                  className="naru-fullscreen-image"
                />
             ) : mobileScreens[currentIndex].id === 3 ? (
                <img 
                  src={naruHomeImage} 
                  alt={mobileScreens[currentIndex].title} 
                  className="naru-fullscreen-image"
                />
             ) : mobileScreens[currentIndex].id === 4 ? (
                <img 
                  src={naruAIImage} 
                  alt={mobileScreens[currentIndex].title} 
                  className="naru-fullscreen-image"
                />
             ) : (
                <div className="naru-phone-frame naru-fullscreen-phone-frame">
                    <div className="naru-phone-notch"></div>
                    <div className="naru-phone-screen-placeholder" style={{ justifyContent: 'center' }}>
                        <span style={{ color: '#666' }}>이미지가 없습니다.</span>
                    </div>
                </div>
             )}
            </div>
        </div>
      )}
    </section>
  );
};

export default NaruSolution;
