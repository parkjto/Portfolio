import React from 'react';
import '../styles/ProjectIndex.css';

const ProjectIndex = () => {
  const projects = [
    {
      id: 1,
      number: '01',
      title: 'MyBiz (마이비즈)',
      badges: ['Mobile App', 'AI Assistant', 'Web Design'],
    },
    {
      id: 2,
      number: '02',
      title: 'MyBiz (마이비즈)',
      badges: ['Mobile App', 'AI Assistant', 'Web Design'],
    },
    {
      id: 3,
      number: '03',
      title: 'MyBiz (마이비즈)',
      badges: ['Mobile App', 'AI Assistant', 'Web Design'],
    },
  ];

  return (
    <section className="project-index-container">
      <div className="main-content">
        <h2 className="section-heading">Projects</h2>
        
        <div className="cards-container">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="card-header">
                <span className="card-number">{project.number}</span>
                <div className="card-info">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="badges-list">
                    {project.badges.map((badge, index) => (
                      <span key={index} className="badge">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="image-placeholder" aria-label="Project screenshot placeholder">
                {/* Image or additional content goes here */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectIndex;

