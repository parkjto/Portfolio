import React from 'react';
import ProjectSidebar from '../Common/ProjectSidebar';

const IgESidebar = ({ activeSection }) => {
  const navItems = [
    { label: 'Overview', id: 'ige-overview' },
    { label: 'Flow Chart', id: 'ige-flowchart' },
    { label: 'Problem', id: 'ige-problem' },
    { label: 'Solution', id: 'ige-solution' },
    { label: 'Learning', id: 'ige-learning' },
  ];

  return <ProjectSidebar activeSection={activeSection} navItems={navItems} />;
};

export default IgESidebar;

