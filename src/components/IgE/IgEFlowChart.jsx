import React from 'react';
import '../../styles/IgE/IgEFlowChart.css';
import IgESidebar from './IgESidebar';
import igeFlowChart1 from '../../assets/image/IgE/IgEFlowchart1.png';
import igeFlowChart3 from '../../assets/image/IgE/IgEFlowchar3.png';

const IgEFlowChart = () => {
  return (
    <section id="ige-flowchart" className="ige-flowchart-container">
      <div className="ige-flowchart-wrapper">
        <IgESidebar activeSection="Flow Chart" />
        
        <main className="ige-flowchart-main">
          <header className="ige-flowchart-header">
            <div className="ige-header-label">FLOW CHART</div>
            <h2 className="ige-header-title">
              시스템 아키텍처 &<br />
              사용자 플로우
            </h2>
            <p className="ige-header-description">
              IgE 서비스의 전체 시스템 구조와<br />
              사용자 경험 흐름을 시각화했습니다.
            </p>
          </header>

          {/* Section 1: System Architecture (Development) */}
          <section className="ige-flowchart-section">
            <h3 className="ige-section-title">System Architecture (Development)</h3>
            <p className="ige-section-description">
              Frontend(React) - Backend(Spring Boot) - Database - External API 간의 시스템 구조
            </p>
            <div className="ige-flowchart-image-container ige-pipeline-container">
              <img 
                src={igeFlowChart1} 
                alt="시스템 아키텍처" 
                className="ige-flowchart-image"
                style={{ width: '170%' }}
              />
            </div>
            <div className="ige-info-box">
              <h4 className="ige-info-title">Architecture Highlights</h4>
              <ul className="ige-info-list">
                <li><strong>Spring Boot Backend:</strong> 안정적인 REST API 서버 구축 및 Layered Architecture 적용</li>
                <li><strong>External Integration:</strong> 네이버 검색 API 및 카카오 맵 API 연동을 통한 풍부한 데이터 제공</li>
                <li><strong>Secure Authentication:</strong> Spring Security 기반의 안전한 사용자 인증 및 인가 처리</li>
              </ul>
            </div>
          </section>

          {/* Section 2: User Flow (Design) */}
          <section className="ige-flowchart-section">
            <h3 className="ige-section-title">User Flow (Design)</h3>
            <p className="ige-section-description">
              앱 실행부터 메뉴 추천, 상세 정보 확인까지의 사용자 경험 흐름
            </p>
            <div className="ige-flowchart-image-container ige-pipeline-container">
              <img 
                src={igeFlowChart3} 
                alt="사용자 플로우" 
                className="ige-flowchart-image"
                style={{ width: '100%' }}
              />
            </div>
            
            <div className="ige-info-box">
              <h4 className="ige-info-title">UX Highlights</h4>
              <ul className="ige-info-list">
                <li><strong>Seamless Experience:</strong> 로그인 여부에 따른 자연스러운 화면 전환 및 기능 제한</li>
                  <li><strong>Core Features:</strong> 랜덤 메뉴 추천 → 상세 정보 확인 → 지도 검색으로 이어지는 핵심 동선</li>
                <li><strong>Personalization:</strong> 마이페이지를 통한 개인 알레르기 정보 관리 및 맞춤형 서비스 제공</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};

export default IgEFlowChart;
