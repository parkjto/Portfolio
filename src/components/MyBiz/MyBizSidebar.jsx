import React from 'react';
import '../../styles/MyBiz/MyBizOverview.css'; // 공유 스타일 사용

const MyBizSidebar = ({ activeSection }) => {
  const navItems = [
    { label: 'Overview', id: 'mybiz-overview' },
    { label: 'Flow Chart', id: 'mybiz-flowchart' },
    { label: 'Problem', id: 'mybiz-problem' },
    { label: 'Solution', id: 'mybiz-solution' },
    { label: 'Result & Learning', id: 'mybiz-result' },
  ];

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
    <aside className="sidebar">
      <nav className="nav-block">
        {navItems.map((item) => (
          <div
            key={item.label}
            onClick={() => handleScroll(item.id)}
            className={`nav-item ${activeSection === item.label ? 'active' : 'inactive'}`}
            style={{ cursor: 'pointer' }}
          >
            {item.label}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default MyBizSidebar;

