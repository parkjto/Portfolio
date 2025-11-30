import React from 'react';
import '../../styles/Common/ProjectSidebar.css';

/**
 * 공통 프로젝트 사이드바 컴포넌트
 * @param {Object} props
 * @param {string} props.activeSection - 현재 활성화된 섹션 이름
 * @param {Array<{label: string, id: string}>} props.navItems - 내비게이션 아이템 목록
 */
const ProjectSidebar = ({ activeSection, navItems }) => {
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
    </aside>
  );
};

export default ProjectSidebar;

