import React from 'react';
import '../../styles/MyBiz/MyBizSolution.css';
import MyBizSidebar from './MyBizSidebar';
import { useSlider } from '../../hooks/useSlider';
import { useFullScreen } from '../../hooks/useFullScreen';
import { FULLSCREEN_HINTS, PDF_CLASSES } from '../../utils/constants';
import { padNumber, safeGet } from '../../utils/helpers';
import fullscreenIcon from '../../assets/icons/fullscreen_icon.svg';
import navImage from '../../assets/image/MyBiz/MyBizNav.png';
import salesImage from '../../assets/image/MyBiz/MyBizMSalesAnalyze.png';
import mainImage from '../../assets/image/MyBiz/MyBizMMain.png';
import chatImage from '../../assets/image/MyBiz/MyBizMChat.png';
import reviewImage from '../../assets/image/MyBiz/MyBizMReviewAnalyze.png';
import govImage from '../../assets/image/MyBiz/MyBizMGov.png';
import adImage from '../../assets/image/MyBiz/MyBizMAD.png';

const mobileScreens = [
  {
    id: 1,
    label: 'Home',
    title: '홈 대시보드',
    subtitle: '가게 현황을 한눈에 보는 홈 화면',
    description:
      '오늘 매출, 주요 지표, 알림을 한 번에 보여주는 홈 대시보드입니다. 복잡한 표 대신 핵심만 크게 보여주어 바쁜 사장님도 3초 만에 상황을 파악할 수 있습니다.',
    tag: 'Mobile UI',
  },
  {
    id: 2,
    label: 'Chat',
    title: 'AI 채팅',
    subtitle: '자연어 질의응답',
    description:
      '기존 사장님 앱들은 메뉴가 복잡해 원하는 기능을 찾기 어렵습니다. 하지만 카카오톡처럼 익숙한 채팅 인터페이스로, "지난달 매출 어때?" 한 마디로 원하는 정보를 바로 확인할 수 있습니다.',
    tag: 'AI Assistant',
  },
  {
    id: 3,
    label: 'Sales',
    title: '매출 분석',
    subtitle: '기간/메뉴/채널별 매출 인사이트',
    description:
      '기간 필터와 간단한 그래프만으로 매출 추이를 확인할 수 있습니다. 데이터 문해력이 부족해도 색과 패턴 위주로 정보를 해석할 수 있도록 구성했습니다.',
    tag: 'Sales Analysis',
  },
  {
    id: 4,
    label: 'Review',
    title: '리뷰 분석',
    subtitle: '리뷰 감성 및 키워드 분석',
    description:
      '긍/부정 리뷰 비율과 자주 등장하는 키워드를 시각화하여, 메뉴 개선과 서비스 보완 포인트를 직관적으로 발견할 수 있도록 디자인했습니다.',
    tag: 'Review Analysis',
  },
  {
    id: 5,
    label: 'Policy',
    title: '정부 정책 소개',
    subtitle: '내 가게에 맞는 지원금/정책 추천',
    description:
      '지역 필터와 검색 기능으로 원하는 정책만 골라볼 수 있습니다. 복잡한 정부 사이트를 일일이 뒤지지 않아도 카드 형태로 바로 확인할 수 있습니다.',
    tag: 'Gov. Policy',
  },
  {
    id: 6,
    label: 'Ad',
    title: 'AI 광고 생성',
    subtitle: 'AI를 통한 광고 생성',
    description:
      '디자이너 고용 비용 부담 없이, 사진 한 장으로 전문가급 홍보물을 만듭니다. AI가 적절한 카피와 레이아웃을 자동으로 제안합니다.',
    tag: 'AI Ad Creation',
  },
];

const MyBizSolution = () => {
  const { currentIndex, goNext, goPrev, goToIndex, getSlideClass } = useSlider(mobileScreens.length);
  const { isFullScreen, toggleFullScreen } = useFullScreen();

  const slideClassNames = {
    active: 'mobile-slide-active',
    prev: 'mobile-slide-prev',
    next: 'mobile-slide-next',
    hidden: 'mobile-slide-hidden',
  };

  const getSlideClassName = (index) => getSlideClass(index, slideClassNames);

  return (
    <section id="mybiz-solution" className="mobile-showcase-container">
      <div className="mobile-showcase-wrapper">
        {/* Shared Sidebar Navigation */}
        <MyBizSidebar activeSection="Solution" />

        {/* Main Content */}
        <main className="mobile-showcase-main">
          <header className="mobile-showcase-header">
            <div className="header-label">MOBILE UI OVERVIEW</div>
            <h2 className="header-title">
              핸드폰 화면 중심으로
              <br />
              서비스 경험을 설계했습니다
            </h2>
            <p className="header-description">
              홈, 매출 분석, 리뷰 분석, 정부 정책 소개, 광고 생성 다섯 가지 핵심 화면을 중심으로
              <br />
              주요 기능들을 모바일에서 직관적으로 소개합니다.
            </p>
          </header>

          <div className={`mobile-slider ${PDF_CLASSES.HIDDEN}`}>
            <button
              className="mobile-slider-btn prev"
              type="button"
              onClick={goPrev}
              aria-label="Previous screen"
            >
              ‹
            </button>

            <div className="mobile-slider-viewport">
              {mobileScreens.map((screen, index) => (
                <article
                  key={screen.id}
                  className={`mobile-card mobile-slide ${getSlideClassName(index)}`}
                >
                  <div className="mobile-card-inner">
                    <div className="mobile-card-text">
                      <div className="mobile-card-label-row">
                        <span className="mobile-card-index">
                          {padNumber(screen.id)}
                        </span>
                        <span className="mobile-card-chip">{screen.tag}</span>
                      </div>
                      <h3 className="mobile-card-title">
                        <span className="mobile-card-title-label">{screen.label}</span>
                        {screen.title}
                      </h3>
                      <p className="mobile-card-subtitle">{screen.subtitle}</p>
                      <p className="mobile-card-description">{screen.description}</p>
                    </div>

                    {/* Phone Mockup with Empty Media Slot or Actual Image */}
                    <div className="mobile-card-phone">
                      {screen.id === 1 ? (
                        <div className="mobile-screen-image-wrapper">
                          <img 
                            src={mainImage} 
                            alt={screen.title} 
                            className="mobile-screen-image"
                          />
                          <button
                            type="button"
                            className="mobile-fullscreen-btn"
                            onClick={toggleFullScreen}
                            aria-label="View screen fullscreen"
                          >
                            <img src={fullscreenIcon} alt="" />
                          </button>
                        </div>
                      ) : screen.id === 2 ? (
                        <div className="mobile-screen-image-wrapper">
                          <img 
                            src={chatImage} 
                            alt={screen.title} 
                            className="mobile-screen-image"
                          />
                          <button
                            type="button"
                            className="mobile-fullscreen-btn"
                            onClick={toggleFullScreen}
                            aria-label="View screen fullscreen"
                          >
                            <img src={fullscreenIcon} alt="" />
                          </button>
                        </div>
                      ) : screen.id === 3 ? (
                        <div className="mobile-screen-image-wrapper">
                          <img 
                            src={salesImage} 
                            alt={screen.title} 
                            className="mobile-screen-image"
                          />
                          <button
                            type="button"
                            className="mobile-fullscreen-btn"
                            onClick={toggleFullScreen}
                            aria-label="View screen fullscreen"
                          >
                            <img src={fullscreenIcon} alt="" />
                          </button>
                        </div>
                      ) : screen.id === 4 ? (
                        <div className="mobile-screen-image-wrapper mobile-screen-scrollable">
                          <div className="mobile-screen-scroll-container">
                            <img 
                              src={reviewImage} 
                              alt={screen.title} 
                              className="mobile-screen-image mobile-screen-scroll-image"
                            />
                          </div>
                          <button
                            type="button"
                            className="mobile-fullscreen-btn"
                            onClick={toggleFullScreen}
                            aria-label="View screen fullscreen"
                          >
                            <img src={fullscreenIcon} alt="" />
                          </button>
                        </div>
                      ) : screen.id === 5 ? (
                        <div className="mobile-screen-image-wrapper mobile-screen-scrollable">
                          <div className="mobile-screen-scroll-container">
                            <img 
                              src={govImage} 
                              alt={screen.title} 
                              className="mobile-screen-image mobile-screen-scroll-image"
                            />
                          </div>
                          <button
                            type="button"
                            className="mobile-fullscreen-btn"
                            onClick={toggleFullScreen}
                            aria-label="View screen fullscreen"
                          >
                            <img src={fullscreenIcon} alt="" />
                          </button>
                        </div>
                      ) : screen.id === 6 ? (
                        <div className="mobile-screen-image-wrapper">
                          <img 
                            src={adImage} 
                            alt={screen.title} 
                            className="mobile-screen-image"
                          />
                          <button
                            type="button"
                            className="mobile-fullscreen-btn"
                            onClick={toggleFullScreen}
                            aria-label="View screen fullscreen"
                          >
                            <img src={fullscreenIcon} alt="" />
                          </button>
                        </div>
                      ) : (
                        <div className="phone-frame">
                          <div className="phone-notch" />
                          <div className="phone-screen-placeholder">
                            <span className="placeholder-label">
                              IMAGE / GIF / VIDEO
                            </span>
                            <span className="placeholder-sub">
                              실제 포트폴리오에서는
                              <br />
                              해당 화면 캡처 또는 프로토타입 영상을 삽입합니다.
                            </span>
                            <img 
                              src={navImage} 
                              alt="Bottom Navigation" 
                              className="phone-bottom-nav"
                            />
                          </div>
                          <button
                            type="button"
                            className="mobile-fullscreen-btn"
                            onClick={toggleFullScreen}
                            aria-label="View screen fullscreen"
                          >
                            <img src={fullscreenIcon} alt="" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button
              className="mobile-slider-btn next"
              type="button"
              onClick={goNext}
              aria-label="Next screen"
            >
              ›
            </button>

            <div className={`slider-dots ${PDF_CLASSES.HIDDEN}`}>
              {mobileScreens.map((screen, index) => (
                <div
                  key={screen.id}
                  className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
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
          </div>

          {/* PDF Generate View: All Cards Expanded */}
          <div className={PDF_CLASSES.ONLY} style={{ width: '100%', marginTop: '20px' }}>
            {mobileScreens.map((screen) => (
              <div 
                key={screen.id} 
                className={PDF_CLASSES.SEPARATE_PAGE} 
                style={{ 
                  marginBottom: '40px', 
                  pageBreakInside: 'avoid',
                  breakInside: 'avoid'
                }}
              >
                <article className="mobile-card" style={{ 
                  display: 'block',
                  opacity: 1,
                  transform: 'none',
                  position: 'relative',
                  width: '100%',
                  margin: '0 auto'
                }}>
                  <div className="mobile-card-inner">
                    <div className="mobile-card-text">
                      <div className="mobile-card-label-row">
                        <span className="mobile-card-index">
                          {padNumber(screen.id)}
                        </span>
                        <span className="mobile-card-chip">{screen.tag}</span>
                      </div>
                      <h3 className="mobile-card-title">
                        <span className="mobile-card-title-label">{screen.label}</span>
                        {screen.title}
                      </h3>
                      <p className="mobile-card-subtitle">{screen.subtitle}</p>
                      <p className="mobile-card-description">{screen.description}</p>
                    </div>

                    <div className="mobile-card-phone">
                      {screen.id === 1 ? (
                        <div className="mobile-screen-image-wrapper">
                          <img 
                            src={mainImage} 
                            alt={screen.title} 
                            className="mobile-screen-image"
                          />
                        </div>
                      ) : screen.id === 2 ? (
                        <div className="mobile-screen-image-wrapper">
                          <img 
                            src={chatImage} 
                            alt={screen.title} 
                            className="mobile-screen-image"
                          />
                        </div>
                      ) : screen.id === 3 ? (
                        <div className="mobile-screen-image-wrapper">
                          <img 
                            src={salesImage} 
                            alt={screen.title} 
                            className="mobile-screen-image"
                          />
                        </div>
                      ) : screen.id === 4 ? (
                        <div className="mobile-screen-image-wrapper mobile-screen-scrollable">
                          <div className="mobile-screen-scroll-container">
                            <img 
                              src={reviewImage} 
                              alt={screen.title} 
                              className="mobile-screen-image mobile-screen-scroll-image"
                            />
                          </div>
                        </div>
                      ) : screen.id === 5 ? (
                        <div className="mobile-screen-image-wrapper mobile-screen-scrollable">
                          <div className="mobile-screen-scroll-container">
                            <img 
                              src={govImage} 
                              alt={screen.title} 
                              className="mobile-screen-image mobile-screen-scroll-image"
                            />
                          </div>
                        </div>
                      ) : screen.id === 6 ? (
                        <div className="mobile-screen-image-wrapper">
                          <img 
                            src={adImage} 
                            alt={screen.title} 
                            className="mobile-screen-image"
                          />
                        </div>
                      ) : (
                        <div className="phone-frame">
                          <div className="phone-notch" />
                          <div className="phone-screen-placeholder">
                            <span className="placeholder-label">
                              IMAGE / GIF / VIDEO
                            </span>
                            <span className="placeholder-sub">
                              실제 포트폴리오에서는
                              <br />
                              해당 화면 캡처 또는 프로토타입 영상을 삽입합니다.
                            </span>
                            <img 
                              src={navImage} 
                              alt="Bottom Navigation" 
                              className="phone-bottom-nav"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </main>
      </div>
      {isFullScreen && (() => {
        const currentScreen = safeGet(mobileScreens, currentIndex);
        if (!currentScreen) return null;
        
        return (
          <div className="fullscreen-modal" onClick={toggleFullScreen}>
            <div className="fullscreen-hint">
              {FULLSCREEN_HINTS.CLOSE}
            </div>
            <div className="fullscreen-content">
              {currentScreen.id === 1 ? (
              <img 
                src={mainImage} 
                alt={mobileScreens[currentIndex].title} 
                className="fullscreen-image"
              />
            ) : currentScreen.id === 2 ? (
              <img 
                src={chatImage} 
                alt={currentScreen.title} 
                className="fullscreen-image"
              />
            ) : currentScreen.id === 3 ? (
              <img 
                src={salesImage} 
                alt={currentScreen.title} 
                className="fullscreen-image"
              />
            ) : currentScreen.id === 4 ? (
              <img 
                src={reviewImage} 
                alt={currentScreen.title} 
                className="fullscreen-image"
              />
            ) : currentScreen.id === 5 ? (
              <img 
                src={govImage} 
                alt={currentScreen.title} 
                className="fullscreen-image"
              />
            ) : currentScreen.id === 6 ? (
              <img 
                src={adImage} 
                alt={currentScreen.title} 
                className="fullscreen-image"
              />
            ) : (
              <div className="phone-frame fullscreen-phone-frame">
                <div className="phone-notch" />
                <div className="phone-screen-placeholder">
                  <span className="placeholder-label">
                    IMAGE / GIF / VIDEO
                  </span>
                  <span className="placeholder-sub">
                    실제 포트폴리오에서는
                    <br />
                    고해상도 화면 캡처 또는 프로토타입 영상을 전체 화면으로 보여줍니다.
                  </span>
                  <img 
                    src={navImage} 
                    alt="Bottom Navigation" 
                    className="phone-bottom-nav"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        );
      })()}
    </section>
  );
};

export default MyBizSolution;


