/* 변수(Variables) 정의
  색상이나 폰트 설정을 한 곳에서 관리합니다.
*/
:root {
    --text-primary: #111827;
    --text-secondary: #2c2c2c;
    --text-gray: #878787;
    --bg-white: #ffffff;
    
    --font-base: "Pretendard", "Helvetica", sans-serif;
    --font-bold: "Pretendard-Bold", "Pretendard", sans-serif;
    --font-semibold: "Pretendard-SemiBold", "Pretendard", sans-serif;
  }
  
  /* 전체 컨테이너 설정 */
  .about-container {
    width: 100%;
    max-width: 1200px; /* 너무 넓게 퍼지는 것 방지 */
    margin: 0 auto;    /* 중앙 정렬 */
    padding: 60px 24px;
    background-color: var(--bg-white);
    box-sizing: border-box;
    font-family: var(--font-base);
    color: var(--text-primary);
  }
  
  /* 헤더 (About Me, 안녕하세요...) */
  .about-header {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .sub-title {
    font-family: var(--font-bold);
    font-size: 20px;
    color: var(--text-gray);
    font-weight: 700;
  }
  
  .main-title {
    font-family: var(--font-bold);
    font-size: 28px;
    line-height: 1.4;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.5px;
  }
  
  /* 메인 레이아웃: 모바일(기본)은 1열, 데스크탑은 2열 */
  .about-content {
    display: grid;
    grid-template-columns: 1fr; /* 모바일 기본 */
    gap: 40px;
  }
  
  /* 개별 정보 블록 */
  .info-block {
    margin-bottom: 40px;
  }
  
  .info-block:last-child {
    margin-bottom: 0;
  }
  
  /* 섹션 제목 (Careers, Major 등) */
  .section-title {
    font-family: var(--font-bold);
    font-size: 22px;
    margin: 0 0 12px 0;
    padding-bottom: 8px;
    border-bottom: 2px solid #eee; /* 시각적 구분선 추가 (선택사항) */
    width: fit-content;
  }
  
  /* 리스트 및 텍스트 스타일 */
  .info-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .info-list li, 
  .info-text {
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-primary);
    margin-bottom: 6px;
  }
  
  .description {
    word-break: keep-all; /* 한글 단어 잘림 방지 */
    color: var(--text-secondary);
  }
  
  /* 스킬 섹션 스타일링 */
  .skill-group {
    margin-bottom: 20px;
  }
  
  .skill-category {
    font-family: var(--font-semibold);
    font-size: 18px;
    margin: 0 0 8px 0;
    color: var(--text-secondary);
  }
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .tag {
    background-color: #f3f4f6; /* 가독성을 위한 배경색 추가 */
    padding: 4px 12px;
    border-radius: 6px;
    font-size: 15px;
    color: var(--text-primary);
    font-weight: 500;
  }
  
  /* --- 반응형 미디어 쿼리 --- */
  
  /* 태블릿 이상 (768px ~) */
  @media (min-width: 768px) {
    .about-container {
      padding: 80px 40px;
    }
    
    .main-title {
      font-size: 32px;
    }
    
    .mobile-break {
      display: none; /* PC에서는 줄바꿈 제거 */
    }
  }
  
  /* 데스크탑 이상 (1024px ~) */
  @media (min-width: 1024px) {
    .about-content {
      /* 화면이 넓어지면 2컬럼 그리드로 변경 */
      grid-template-columns: 1fr 1fr; 
      gap: 60px; /* 좌우 간격 넓힘 */
    }
    
    .main-title {
      font-size: 36px;
    }
    
    .sub-title {
      font-size: 24px;
    }
  
    .section-title {
      font-size: 24px;
    }
    
    .info-list li, 
    .info-text,
    .tag {
      font-size: 18px;
    }
  }