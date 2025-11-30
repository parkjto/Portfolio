import React from 'react';
import ProjectSidebar from '../Common/ProjectSidebar';

const NaruSidebar = ({ activeSection }) => {
  const navItems = [
    { label: 'Overview', id: 'naru-overview' },
    { label: 'Flow Chart', id: 'naru-flowchart' },
    { label: 'Problem', id: 'naru-problem' },
    { label: 'Solution', id: 'naru-solution' },
    { label: 'Result & Future', id: 'naru-result' },
  ];

  return <ProjectSidebar activeSection={activeSection} navItems={navItems} />;
};

export default NaruSidebar;
