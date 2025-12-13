import React from 'react';
import '../../styles/Naru/NaruFlowChart.css';
import NaruSidebar from './NaruSidebar';
import naruFlowChart1 from '../../assets/image/Naru/NaruFlowchart1.png';
import naruFlowChart2 from '../../assets/image/Naru/NaruFlowchart2.png';

const NaruFlowChart = () => {

  return (
    <section id="naru-flowchart" className="naru-flowchart-container">
      <div className="naru-flowchart-wrapper">
        <NaruSidebar activeSection="Flow Chart" />
        <main className="naru-flowchart-main">
          <header className="naru-flowchart-header">
            <div className="naru-header-label">FLOW CHART</div>
            <h2 className="naru-header-title">
              시스템 아키텍처 &
              <br />
              사용자 플로우
            </h2>
            <p className="naru-header-description">
              개발 구조와 사용자 경험을 시각화한
              <br />
              나루나루 서비스의 전체 흐름입니다.
            </p>
          </header>

          {/* 섹션 1: 시스템 아키텍처 (Development) */}
          <section className="naru-flowchart-section">
            <h3 className="naru-section-title">System Architecture (Development)</h3>
            <p className="naru-section-description">
              Client - Server - Database - External API 간의 데이터 흐름 구조
            </p>
            <div className="naru-flowchart-image-container">
              <img 
                src={naruFlowChart2} 
                alt="시스템 아키텍처" 
                className="naru-flowchart-image"
              />
            </div>
            <div className="naru-info-box">
              <h4 className="naru-info-title">Architecture Highlights</h4>
              <ul className="naru-info-list">
                <li><strong>Node.js/Express Server:</strong> REST API 기반의 백엔드 서버 구축</li>
                <li><strong>Layered Architecture:</strong> Router - Controller - Service - Model 계층 분리</li>
                <li><strong>External Integrations:</strong> 카카오/네이버 지도 API 및 소셜 로그인 연동</li>
              </ul>
            </div>
          </section>

      {/* 섹션 2: 사용자 플로우 (Design) */}
      <section className="naru-flowchart-section">
        <h3 className="naru-section-title">User Flow (Design)</h3>
        <p className="naru-section-description">
          앱 실행부터 핵심 기능 사용까지의 사용자 경험 흐름
        </p>
        <div className="naru-pipeline-image-container">
          <img 
            src={naruFlowChart1} 
            alt="사용자 플로우" 
            className="naru-pipeline-image"
          />
        </div>
          <div className="naru-info-box">
              <h4 className="naru-info-title">UX Highlights</h4>
              <ul className="naru-info-list">
                <li><strong>직관적인 진입:</strong> 로그인 여부에 따른 유연한 화면 전환</li>
                <li><strong>핵심 동선 최적화:</strong> 메인 홈 → 맛집 리스트/지도 탐색 → 상세 정보 확인</li>
                <li><strong>사용자 참여 유도:</strong> 길찾기, 찜하기, 리뷰 작성 등 주요 액션 접근성 강화</li>
              </ul>
            </div>
          </section>

        </main>
      </div>
    </section>
  );
};

export default NaruFlowChart;