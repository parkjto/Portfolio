import React from 'react';
import '../../styles/IgE/IgELearning.css';
import IgESidebar from './IgESidebar';

const IgELearning = () => {
  return (
    <section id="ige-learning" className="ige-learning-wrapper">
      <div className="ige-learning-container">
        <IgESidebar activeSection="Learning" />
        
        <div className="ige-learning-content">
          <section className="learning-hero">
            <span className="section-label">Review & Learning Point</span>
            <h1 className="hero-heading">
              첫 풀스택 도전,<br />
              <span className="highlight-text">성장의 발판이 되다</span>
            </h1>
          </section>

          <div className="learning-grid">
            {/* Card 1: Technical Growth */}
            <div className="learning-card">
              <div className="card-header">
                <div className="card-icon">1</div>
                <h3 className="card-title">풀스택 아키텍처의 이해</h3>
              </div>
              <p className="card-desc">
                Spring Boot와 React를 결합해 풀스택 개발의 전 과정을 주도했습니다. 
                MVC 패턴과 RESTful API 설계를 직접 적용하며 웹 서비스의 전체 구조를 깊이 있게 이해했습니다.
              </p>
            </div>

            {/* Card 2: Problem Solving */}
            <div className="learning-card">
              <div className="card-header">
                <div className="card-icon">2</div>
                <h3 className="card-title">API 연동과 트러블 슈팅</h3>
              </div>
              <p className="card-desc">
                Naver/Kakao API를 활용해 위치 기반 서비스를 구현했습니다. 
                특히 좌표 변환 및 비동기 데이터 처리 이슈를 해결하며 실무적인 문제 해결 능력을 길렀습니다.
              </p>
            </div>

            {/* Card 3: Lessons Learned (Full Width) */}
            <div className="learning-card full-width">
              <div className="card-header">
                <div className="card-icon">💡</div>
                <h3 className="card-title">설계와 리스크 관리의 중요성</h3>
              </div>
              <div className="card-content">
                <p className="card-desc" style={{ marginBottom: '20px' }}>
                  초기 설계 부족으로 인한 시행착오를 통해 <strong>'철저한 기획'</strong>과 <strong>'리스크 관리'</strong>가 개발 실력만큼 중요하다는 것을 배웠습니다.
                </p>
                <ul className="lesson-list">
                  <li className="lesson-item">
                    <span className="check-icon">✓</span>
                    <span>핵심 기능 위주의 단계적 구현 전략 수립 및 보수적인 일정 관리</span>
                  </li>
                  <li className="lesson-item">
                    <span className="check-icon">✓</span>
                    <span>기술 문서화 역량을 바탕으로 협업 시 소통 비용을 줄이는 개발자 지향</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IgELearning;

