import React from 'react';
import ProjectSidebar from '../Common/ProjectSidebar';

const MyBizSidebar = ({ activeSection }) => {
  const navItems = [
    { label: 'Overview', id: 'mybiz-overview' },
    { label: 'Flow Chart', id: 'mybiz-flowchart' },
    { label: 'Problem', id: 'mybiz-problem' },
    { label: 'Solution', id: 'mybiz-solution' },
    { label: 'Result & Learning', id: 'mybiz-result' },
  ];

  return <ProjectSidebar activeSection={activeSection} navItems={navItems} />;
};

export default MyBizSidebar;
