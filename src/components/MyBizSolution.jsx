import React, { useState, useEffect, useRef } from 'react';
import '../styles/MyBizSolution.css';
import MyBizSidebar from './MyBizSidebar';
import chatImg from '../assets/image/MyBizMChat.png';
import mainImg from '../assets/image/MyBizMMain.png';
import reviewImg from '../assets/image/MyBizMReviewAnalyze.png';
import salesImg from '../assets/image/MyBizMSalesAnalyze.png';

const MyBizSolution = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const featureRefs = useRef([]);
  const phoneScreenRef = useRef(null); // 핸드폰 화면 참조 Ref

  // 이미지 배열 순서: Feature 1 -> 2 -> 3 -> 4
  // Feature 1: 자연어 질의응답 -> 채팅 화면 (chatImg)
  // Feature 2: 맞춤형 정책 추천 -> 메인 화면 (mainImg)
  // Feature 3: AI 광고 자동 생성 -> 리뷰 분석 화면 (reviewImg) - (임시 매핑)
  // Feature 4: 직관적 데이터 시각화 -> 매출 분석 화면 (salesImg)
  const screenImages = [chatImg, mainImg, reviewImg, salesImg];

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          setActiveFeature(index);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-45% 0px -45% 0px', // 화면 정중앙 10% 영역을 지날 때 트리거 (더 정밀함)
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // 이미지가 변경될 때 핸드폰 화면 스크롤을 맨 위로 초기화
  useEffect(() => {
    if (phoneScreenRef.current) {
      phoneScreenRef.current.scrollTop = 0;
    }
  }, [activeFeature]);

  return (
    <section id="mybiz-solution" className="mybiz-solution-wrapper">
      {/* Shared Sidebar Navigation */}
      <MyBizSidebar activeSection="Solution" />

      {/* Main Content */}
      <main className="mybiz-main-content">
        <div className="content-container">
          
          {/* Hero Section */}
          <section className="solution-hero">
            <span className="section-label">Solution Strategy</span>
            <div className="hero-heading-group">
              <h1 className="hero-title-line">누구나 쉽게 쓰는</h1>
              <h1 className="hero-title-line highlight">대화형 AI 비서</h1>
            </div>
            <div className="hero-description">
              <p>소상공인의 3가지 결핍(시간, 전문성, 비용)을 해결하기 위해,</p>
              <p>가장 익숙한 '채팅' 인터페이스로 진입 장벽을 없앴습니다.</p>
            </div>
          </section>

          {/* Content Grid */}
          <div className="solution-content-grid">
            
            {/* Left Column: Features */}
            <div className="features-column">
              
              {/* Feature 1 */}
              <div 
                className="feature-block"
                data-index="0"
                ref={el => featureRefs.current[0] = el}
              >
                <span className="feature-label">CORE FEATURE 01</span>
                <h2 className="feature-title">💬 자연어 질의응답</h2>
                <h3 className="feature-subtitle">Why? 복잡한 UI 학습 비용 제거</h3>
                <p className="feature-desc">
                  기존 사장님 앱들은 메뉴가 너무 많아 원하는 기능을 찾기 어렵습니다.<br/>
                  하지만 카톡은 누구나 쓸 줄 알죠. "지난달 매출 어때?" 한 마디면 충분하게 만들었습니다.
                </p>
              </div>

              {/* Feature 2 */}
              <div 
                className="feature-block"
                data-index="1"
                ref={el => featureRefs.current[1] = el}
              >
                <span className="feature-label">CORE FEATURE 02</span>
                <h2 className="feature-title">🤖 맞춤형 정책 추천</h2>
                <h3 className="feature-subtitle">Why? 정보 탐색 시간 '0'으로 단축</h3>
                <p className="feature-desc">
                  지원금은 많지만, 내 가게에 맞는 걸 찾으려면 몇 시간씩 공고를 뒤져야 합니다.<br/>
                  가게 정보(지역/업종)만 있으면 AI가 '받을 수 있는 돈'만 콕 집어 알려줍니다.
                </p>
              </div>

              {/* Feature 3 */}
              <div 
                className="feature-block"
                data-index="2"
                ref={el => featureRefs.current[2] = el}
              >
                <span className="feature-label">CORE FEATURE 03</span>
                <h2 className="feature-title">✨ AI 광고 자동 생성</h2>
                <h3 className="feature-subtitle">Why? 디자인 비용 & 기술 장벽 해결</h3>
                <p className="feature-desc">
                  디자이너 고용 비용 부담 없이, 사진 한 장으로 전문가급 홍보물을 만듭니다.<br/>
                  AI가 적절한 카피와 레이아웃을 자동으로 제안합니다.
                </p>
              </div>

              {/* Feature 4 */}
              <div 
                className="feature-block"
                data-index="3"
                ref={el => featureRefs.current[3] = el}
              >
                <span className="feature-label">CORE FEATURE 04</span>
                <h2 className="feature-title">📉 직관적 데이터 시각화</h2>
                <h3 className="feature-subtitle">Why? 데이터 문해력 격차 보완</h3>
                <p className="feature-desc">
                  복잡한 엑셀 표 대신, "파란색은 긍정, 빨간색은 부정" 직관적인 색상과 그래프로<br/>
                  데이터를 해석할 줄 몰라도 3초 만에 가게 현황을 파악할 수 있습니다.
                </p>
              </div>

            </div>

            {/* Right Column: Phone Mockup */}
            <div className="phone-column">
              <div className="phone-mockup">
                {/* <div className="phone-status-bar">
                  <span className="time">9:41</span>
                  <span className="icons">Signal Wifi Battery</span>
                </div> */}
                <div className="phone-screen" ref={phoneScreenRef}>
                  {screenImages.map((src, index) => (
                    <img 
                      key={index}
                      src={src} 
                      alt={`App Screen ${index + 1}`} 
                      className={`screen-image ${activeFeature === index ? 'active' : ''}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </section>
  );
};

export default MyBizSolution;
