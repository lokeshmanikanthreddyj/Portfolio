import React from 'react';
import profileImage from '../assets/lokesh-profile.png';
import {
  about,
  credentials,
  education,
  personalInterests,
  profile,
  researchInterests,
  skills,
} from '../data/portfolio';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-band">
        <div className="hero-copy">
          <p className="eyebrow">Personal Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-text">{profile.tagline}</p>

          <div className="hero-actions">
            <a className="action-button primary" href="#/projects">
              View Projects
            </a>
            <a className="action-button secondary" href={`mailto:${profile.personalEmail}`}>
              Get in Touch
            </a>
          </div>

          <dl className="hero-stats">
            {profile.stats.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-visual">
          <img src={profileImage} alt="Illustrated profile card for Lokesh Manikanth Reddy" />
        </div>
      </section>

      <section className="section-band intro-band" id="about">
        <div className="section-head">
          <p className="section-kicker">About Me</p>
          <h2>A student portfolio shaped around software, clarity, and execution.</h2>
        </div>

        <div className="two-column-copy">
          <p>{about.intro}</p>
          <p>{about.summary}</p>
          <p>{about.outlook}</p>
        </div>
      </section>

      <section className="section-band split-band">
        <div>
          <p className="section-kicker">Research Interests</p>
          <ul className="interest-list">
            {researchInterests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="section-kicker">Personal Details</p>
          <div className="detail-grid">
            <article>
              <span>Name</span>
              <strong>{profile.name}</strong>
            </article>
            <article>
              <span>Phone</span>
              <strong>{profile.phone}</strong>
            </article>
            <article>
              <span>Personal Email</span>
              <strong>{profile.personalEmail}</strong>
            </article>
            <article>
              <span>College Email</span>
              <strong>{profile.collegeEmail}</strong>
            </article>
            <article>
              <span>Location</span>
              <strong>{profile.location}</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="section-head">
          <p className="section-kicker">Education</p>
          <h2>Academic foundation and professional direction.</h2>
        </div>

        <div className="timeline">
          {education.map((item) => (
            <article className="timeline-row" key={`${item.title}-${item.period}`}>
              <p className="timeline-period">{item.period}</p>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p className="timeline-place">{item.place}</p>
                <p>{item.detail}</p>
                <p className="timeline-meta">{item.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band skills-band">
        <div className="section-head">
          <p className="section-kicker">Skills</p>
          <h2>Technical and professional strengths.</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skill-tile" key={skill.name}>
              <h3>{skill.name}</h3>
              <p>{skill.category}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band split-band credentials-band">
        <div>
          <p className="section-kicker">Qualifications and Recognition</p>
          <div className="credential-stack">
            {credentials.map((item) => (
              <article className="credential-item" key={item.title}>
                <h3>{item.title}</h3>
                <p className="credential-subtitle">{item.subtitle}</p>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <p className="section-kicker">Address and Interests</p>
          <div className="address-box">
            {profile.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <ul className="interest-tags">
            {personalInterests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
