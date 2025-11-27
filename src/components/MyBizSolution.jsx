import React from 'react';
import '../styles/MyBizSolution.css';

/**
 * MyBizSolution Component
 * 
 * Displays the "Solution" section of the case study.
 * Includes a sidebar for navigation context and a main content area.
 * 
 * Note: Figma connection was unavailable, so this component uses the structural template
 * from MyBizProblem with placeholders for Solution-specific content.
 */
const MyBizSolution = () => {
  return (
    <div className="mybiz-solution-wrapper">
      {/* Sidebar Navigation */}
      <aside className="mybiz-sidebar">
        <nav className="mybiz-nav-list">
          <div className="mybiz-nav-item">Overview</div>
          <div className="mybiz-nav-item">Problem</div>
          <div className="mybiz-nav-item active">Solution</div>
          <div className="mybiz-nav-item">Result</div>
          <div className="mybiz-nav-item">Learning</div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="mybiz-main-content">
        
        {/* Hero Section Placeholder */}
        <section className="solution-hero">
          <span className="section-label">Solution Strategy</span>
          <h1 className="hero-heading">
            사용자 중심의<br />
            직관적인 해결책 제안
            {/* Placeholder Text */}
          </h1>
        </section>

        {/* Core Solution Section Placeholder */}
        <section className="solution-section">
          <h2 className="solution-section-title">Key Features</h2>
          <div className="solution-grid">
            {/* Feature 1 */}
            <div className="solution-card">
              <h3 className="solution-card-title">직관적인 대시보드</h3>
              <p className="solution-card-body">
                복잡한 데이터를 한눈에 파악할 수 있도록 시각화된 차트와 요약 정보를 제공합니다.
                중요한 매출 지표를 최상단에 배치하여 접근성을 높였습니다.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="solution-card">
              <h3 className="solution-card-title">맞춤형 인사이트</h3>
              <p className="solution-card-body">
                사용자의 업종과 매출 패턴을 분석하여 구체적인 행동 가이드를 제공합니다.
                어려운 용어 대신 쉬운 언어로 풀어서 설명합니다.
              </p>
            </div>

             {/* Feature 3 */}
             <div className="solution-card">
              <h3 className="solution-card-title">간편한 마케팅 도구</h3>
              <p className="solution-card-body">
                클릭 몇 번으로 실행 가능한 마케팅 캠페인을 생성하고 관리할 수 있습니다.
                예산 설정부터 성과 분석까지 자동화된 프로세스를 지원합니다.
              </p>
            </div>
            
             {/* Feature 4 */}
             <div className="solution-card">
              <h3 className="solution-card-title">실시간 알림 서비스</h3>
              <p className="solution-card-body">
                매출 변동, 예약 현황 등 중요한 이벤트를 실시간으로 알림 받아 즉각 대응할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default MyBizSolution;

