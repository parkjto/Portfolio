import React from 'react';
import '../styles/ProjectIndex.css';
import { PROJECTS } from '../constants/projectData';

const ProjectIndex = () => {
  const handleProjectClick = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="project-index-container">
      <div className="main-content">
        <h2 className="section-heading">Projects</h2>
        
        <div className="cards-container">
          {PROJECTS.map((project) => (
            <article 
              key={project.id} 
              className="project-card" 
              onClick={() => handleProjectClick(project.targetId)}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleProjectClick(project.targetId);
                }
              }}
            >
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
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                    style={project.title === 'IgE' ? { 
                      width: '80%', 
                      height: '80%', 
                      objectFit: 'contain',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)'
                    } : {}}
                  />
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectIndex;
