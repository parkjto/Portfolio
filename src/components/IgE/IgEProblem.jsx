import React from 'react';
import '../../styles/IgE/IgEProblem.css';
import IgESidebar from './IgESidebar';

const IgEProblem = () => {
  return (
    <section id="ige-problem" className="ige-problem-wrapper">
      <div className="ige-content-container">
        <IgESidebar activeSection="Problem" />
        
        <div className="ige-main-content">
          <section className="problem-hero">
            <span className="section-label">Problem Definition</span>
            <h1 className="hero-heading">
              알레르기가 있는 현대인의<br />
              안전하고 즐거운 식사 고민
            </h1>
          </section>

          <section className="pain-section">
            <h2 className="problem-section-title">User Pain Points</h2>
            <div className="pain-grid">
              <div className="pain-card">
                <div className="pain-icon-wrapper">
                  {/* Search Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <div className="pain-content-inner">
                  <h3 className="pain-title">메뉴 선택의 어려움</h3>
                  <span className="pain-label">Decision Fatigue</span>
                  <p className="pain-body">
                    "매일 무엇을 먹을지 고민하는 시간이 길고, 알레르기 유발 재료가 없는지 일일이 확인해야 합니다."
                  </p>
                </div>
              </div>

              <div className="pain-card">
                <div className="pain-icon-wrapper">
                  {/* Alert Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <div className="pain-content-inner">
                  <h3 className="pain-title">안전한 식당 찾기</h3>
                  <span className="pain-label">Safety Concern</span>
                  <p className="pain-body">
                    "내 주변에 알레르기 프리 메뉴를 파는 식당이 어디에 있는지 정보를 찾기 어렵습니다."
                  </p>
                </div>
              </div>

              <div className="pain-card">
                <div className="pain-icon-wrapper">
                  {/* Health Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="pain-content-inner">
                  <h3 className="pain-title">건강 관리의 번거로움</h3>
                  <span className="pain-label">Health Management</span>
                  <p className="pain-body">
                    "나의 건강 상태에 맞는 영양소를 섭취하고 있는지, 안전한 식단을 유지하고 있는지 관리하기 복잡합니다."
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default IgEProblem;
