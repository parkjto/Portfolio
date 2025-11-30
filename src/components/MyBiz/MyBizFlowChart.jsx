import React from 'react';
import '../../styles/MyBiz/MyBizFlowChart.css';
import MyBizSidebar from './MyBizSidebar';
import flowChartImage from '../../assets/image/MyBiz/MyBizFlowchat.png';
import pipelineFlowImage from '../../assets/image/MyBiz/MyBizFlowchartPipe.png';

const MyBizFlowChart = () => {

  return (
    <section id="mybiz-flowchart" className="mybiz-flowchart-container">
      <div className="mybiz-flowchart-wrapper">
        <MyBizSidebar activeSection="Flow Chart" />
        <main className="mybiz-flowchart-main">
          <header className="mybiz-flowchart-header">
            <div className="mybiz-header-label">FLOW CHART</div>
            <h2 className="mybiz-header-title">
              핵심 기능과 자동화 파이프라인
              <br />
              전체 플로우를 한눈에
            </h2>
            <p className="mybiz-header-description">
              MyBiz의 핵심 기능과 자동화 파이프라인을
              <br />
              시각적으로 이해할 수 있도록 구성했습니다.
            </p>
          </header>

          {/* 섹션 1: 핵심 기능 플로우 */}
          <section className="mybiz-flowchart-section">
            <h3 className="mybiz-section-title">1. 핵심 기능 플로우</h3>
            <p className="mybiz-section-description">
              MyBiz의 4가지 핵심 기능별 상세 플로우를 보여줍니다.
            </p>
            <div className="mybiz-flowchart-image-container">
              <img 
                src={flowChartImage} 
                alt="핵심 기능 플로우 차트" 
                className="mybiz-flowchart-image"
              />
            </div>
          </section>

          {/* 섹션 2: 자동화 파이프라인 */}
          <section className="mybiz-flowchart-section">
            <h3 className="mybiz-section-title">2. 자동화 파이프라인</h3>
            <p className="mybiz-section-description">
              리뷰 수집부터 AI 분석까지의 완전 자동화 시스템을 보여줍니다.
            </p>
            <div className="mybiz-pipeline-image-container">
              <img 
                src={pipelineFlowImage} 
                alt="자동화 파이프라인 플로우 차트" 
                className="mybiz-pipeline-image"
              />
            </div>
            <div className="mybiz-info-box">
              <h4 className="mybiz-info-title">핵심 가치</h4>
              <ul className="mybiz-info-list">
                <li><strong>자동화:</strong> 매일 새벽 2시 자동 실행으로 수동 작업 제거</li>
                <li><strong>AI 분석:</strong> OpenAI GPT로 리뷰의 감정, 키워드, 트렌드 분석</li>
                <li><strong>데이터 저장:</strong> 모든 리뷰와 분석 결과를 DB에 영구 저장</li>
                <li><strong>인사이트:</strong> 분석 결과를 대시보드, 챗봇, 광고 생성에 활용</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};

export default MyBizFlowChart;

