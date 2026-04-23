import React from 'react';
import { projects } from '../data/portfolio';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-page">
      <section className="projects-hero-band">
        <p className="section-kicker">Projects Page</p>
        <h1>Work that reflects experimentation, design, and applied thinking.</h1>
        <p>
          This page includes the projects mentioned in the resume, plus a current portfolio build. Where a repository
          link was not verifiable from local files, a note has been left so it can be updated quickly before
          submission.
        </p>
      </section>

      <section className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-topline">
              <span className="project-index">{project.id}</span>
              <span className="project-type">{project.type}</span>
            </div>

            <div className="project-main">
              <div>
                <h2>{project.title}</h2>
                <p className="project-org">{project.org}</p>
              </div>
              <p className="project-duration">{project.duration}</p>
            </div>

            <p className="project-description">{project.description}</p>

            <ul className="outcome-list">
              {project.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="project-actions">
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub Repository
                </a>
              ) : (
                <span className="action-note">GitHub link pending</span>
              )}

              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Project
                </a>
              ) : null}
            </div>

            <p className="project-note">{project.note}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Projects;
