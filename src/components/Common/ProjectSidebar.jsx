import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../../styles/Common/ProjectSidebar.css';

/**
 * 공통 프로젝트 사이드바 컴포넌트
 * @param {Object} props
 * @param {string} props.activeSection - 현재 활성화된 섹션 이름
 * @param {Array<{label: string, id: string}>} props.navItems - 내비게이션 아이템 목록
 */
const ProjectSidebar = ({ activeSection, navItems }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 0; // 필요 시 상단 고정 헤더 높이만큼 보정
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadPDF = async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    
    // PDF 생성 모드 활성화 (숨겨진 요소 표시)
    document.body.classList.add('generating-pdf');
    // 레이아웃 변경 적용을 위한 대기
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      // Landscape 모드 (가로 방향)
      const pdf = new jsPDF('l', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < navItems.length; i++) {
        const item = navItems[i];
        const element = document.getElementById(item.id);

        if (element) {
          if (i > 0) {
            pdf.addPage();
          }

          // 체크: 해당 섹션 내에 개별 페이지로 분리해야 할 항목(pdf-separate-page)이 있는지 확인
          const separatePages = element.getElementsByClassName('pdf-separate-page');
          
          if (separatePages.length > 0) {
            // 1. 메인 콘텐츠 캡처 (슬라이드 이미지들은 숨김)
            // 개별 페이지 요소들을 잠시 숨김
            Array.from(separatePages).forEach(el => el.style.display = 'none');
            
            // 메인 영역 캡처
            const mainCanvas = await html2canvas(element, {
              scale: 2,
              useCORS: true,
              logging: false,
              windowWidth: element.scrollWidth,
              windowHeight: element.scrollHeight,
              backgroundColor: '#ffffff'
            });
            
            addToPdf(mainCanvas);
            
            // 2. 개별 슬라이드 이미지들 캡처
            // 숨겼던 요소 다시 표시
            Array.from(separatePages).forEach(el => el.style.display = 'block');
            
            for (let j = 0; j < separatePages.length; j++) {
              const subEl = separatePages[j];
              pdf.addPage();
              
              const subCanvas = await html2canvas(subEl, {
                scale: 2,
                useCORS: true,
                logging: false,
                windowWidth: subEl.scrollWidth,
                windowHeight: subEl.scrollHeight,
                backgroundColor: '#ffffff'
              });
              
              addToPdf(subCanvas);
            }
          } else {
            // 일반 섹션 캡처
            const canvas = await html2canvas(element, {
              scale: 2, // 해상도 향상
              useCORS: true,
              logging: false,
              windowWidth: element.scrollWidth,
              windowHeight: element.scrollHeight,
              // 배경색 명시 (투명 방지)
              backgroundColor: '#ffffff'
            });

            addToPdf(canvas);
          }
          
          function addToPdf(canvas) {
            const imgData = canvas.toDataURL('image/png');
            const imgProps = pdf.getImageProperties(imgData);
            
            // 가로 기준 맞춤 (Landscape)
            const pdfRatio = pdfWidth / pdfHeight;
            const imgRatio = imgProps.width / imgProps.height;
            
            let renderWidth = pdfWidth;
            let renderHeight = pdfWidth / imgRatio;
            
            // 만약 계산된 높이가 페이지 높이보다 크면, 높이 기준으로 다시 계산
            if (renderHeight > pdfHeight) {
               renderHeight = pdfHeight;
               renderWidth = pdfHeight * imgRatio;
            }
            
            // 중앙 정렬
            const x = (pdfWidth - renderWidth) / 2;
            const y = (pdfHeight - renderHeight) / 2;
            
            pdf.addImage(imgData, 'PNG', x, y, renderWidth, renderHeight);
          }
        }
      }

      pdf.save('portfolio-project.pdf');
    } catch (error) {
      console.error('PDF generation failed:', error);
      alert('PDF 생성 중 오류가 발생했습니다.');
    } finally {
      // PDF 생성 모드 비활성화
      document.body.classList.remove('generating-pdf');
      setIsGenerating(false);
    }
  };

  return (
    <aside className="project-sidebar">
      <nav className="project-nav-block">
        {navItems.map((item) => (
          <div
            key={item.label}
            onClick={() => handleScroll(item.id)}
            className={`project-nav-item ${activeSection === item.label ? 'active' : 'inactive'}`}
          >
            {item.label}
          </div>
        ))}
      </nav>
      
      <div className="sidebar-footer" style={{ marginTop: '20px', padding: '0 20px' }}>
        <button 
          onClick={handleDownloadPDF} 
          disabled={isGenerating}
          className="pdf-download-btn"
          style={{
            width: '100%',
            padding: '8px 12px',
            backgroundColor: isGenerating ? '#ccc' : '#4285F4',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isGenerating ? 'not-allowed' : 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            transition: 'background-color 0.2s'
          }}
        >
          {isGenerating ? 'PDF 생성 중...' : 'PDF 다운로드'}
        </button>
      </div>
    </aside>
  );
};

export default ProjectSidebar;

