import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './MemberDetails.css';

const membersData = {

  "Trafalgur Law": {
    name: 'Trafalgur Law',
    age: 22,
    role: 'Software Engineer',
    experience: '2 years',
    graduation: 'B.Tech Aerospace',

    photo: '/logos/sai.png',
    resume: '/logos/sairesu.png',

    bio: "A passionate software engineer specializing in AI-driven aerospace systems and scalable web applications. Focused on building intelligent systems for aviation safety and efficiency.",

    skills: ['React', 'Node.js', 'Python', 'AI in Aerospace'],

    strengths: ['Problem Solving', 'System Design', 'Team Leadership'],

    interests: ['AI research', 'Aerospace systems', 'Hackathons'],

    projects: [
      'AI-based flight simulation system',
      'Autopilot decision model using ML'
    ],

    achievements: [
      'Winner - National Hackathon 2024',
      'Published research on AI in Aviation',
      'Top 5 in Smart India Hackathon'
    ],

    certifications: [
      'AWS Cloud Practitioner',
      'Machine Learning Specialization (Coursera)'
    ],

    email: 'sai.madhav@example.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },


  "Light Yagami": {
    name: 'Light Yagami',
    age: 23,
    role: 'Backend Engineer',
    experience: '1.5 years',
    graduation: 'B.Tech Aerospace',

    photo: '/logos/kondareddy.png',
    resume: '/logos/kondaresu.png',

    bio: "Backend engineer focused on building high-performance systems and data pipelines for aerospace applications. Interested in scalable architectures and distributed systems.",

    skills: ['Java', 'Spring Boot', 'Databases', 'Microservices'],

    strengths: ['Logical Thinking', 'Database Design', 'API Development'],

    interests: ['Backend systems', 'Cloud computing', 'System design'],

    projects: [
      'Aircraft telemetry data pipeline',
      'Engine monitoring backend system'
    ],

    achievements: [
      'Ranked Top 10% in Coding Contest',
      'Built scalable microservices system',
      'Intern at Aerospace Data Lab'
    ],

    certifications: [
      'Google Cloud Fundamentals',
      'Java Backend Development (Udemy)'
    ],

    email: 'kondareddy@example.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },


  "Gojo Satoru": {
    name: 'Gojo Satoru',
    age: 24,
    role: 'Aerospace Scientist',
    experience: '3 years',
    graduation: 'M.Tech Aerospace',

    photo: '/logos/billa.png',
    resume: '/logos/billaresu.png',

    bio: "Aerospace researcher specializing in propulsion systems and computational fluid dynamics. Passionate about innovation in high-speed flight technologies.",

    skills: ['MATLAB', 'CFD', 'Aerodynamics', 'Propulsion Systems'],

    strengths: ['Research Analysis', 'Simulation', 'Technical Expertise'],

    interests: ['Research', 'Simulation modeling', 'Teaching'],

    projects: [
      'Rocket propulsion efficiency study',
      'Advanced aerodynamic modeling system'
    ],

    achievements: [
      'Published 2 IEEE research papers',
      'Best Research Award 2023',
      'Conference speaker on propulsion systems'
    ],

    certifications: [
      'Advanced CFD Simulation',
      'Aerospace Research Methods'
    ],

    email: 'billa@example.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },


  "Naruto Uchiha": {
    name: 'Naruto Uchiha',
    age: 22,
    role: 'Hardware Engineer',
    experience: '1 year',
    graduation: 'B.Tech Electronics',

    photo: '/logos/ranga.png',
    resume: '/logos/rangaresu.png',

    bio: "Hardware engineer focused on embedded systems and aerospace electronics. Works on drone hardware and satellite communication circuits.",

    skills: ['Embedded C', 'Arduino', 'Circuit Design', 'IoT'],

    strengths: ['Hardware Debugging', 'Circuit Design', 'Rapid Prototyping'],

    interests: ['Robotics', 'Embedded systems', 'Electronics design'],

    projects: [
      'Drone flight controller hardware',
      'Satellite PCB design prototype'
    ],

    achievements: [
      'Built autonomous drone prototype',
      'Winner - College Robotics Competition',
      'Best Hardware Project Award'
    ],

    certifications: [
      'Embedded Systems Design',
      'IoT Development Certification'
    ],

    email: 'ranga@example.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  }

};

export default function MemberDetails() {
  const { name } = useParams();
  const member = membersData[name];
  const [isOpen, setIsOpen] = useState(false);

  if (!member) return <h2>Member not found</h2>;

    return (
      <div className="member-details-container">

        <div className="member-layout">

          {/* LEFT SIDE */}
          <div className="member-info">
            <h1>{member.name}</h1>

            <p><b>Age:</b> {member.age}</p>
            <p><b>Role:</b> {member.role}</p>
            <p><b>Experience:</b> {member.experience}</p>
            <p><b>Graduation:</b> {member.graduation}</p>
            <h3>About</h3>
              <p>{member.bio}</p>

              <h3>Strengths</h3>
              <ul>
                {member.strengths.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>

            <h3>Skills</h3>
            <ul>
              {member.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>

            <h3>Projects</h3>
            <ul>
              {member.projects.map((proj, i) => (
                <li key={i}>{proj}</li>
              ))}
            </ul>

              <h3>Achievements</h3>
              <ul>
                {member.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>

              <h3>Certifications</h3>
              <ul>
                {member.certifications.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>

            <h3>Interests</h3>
            <p>{member.interests.join(', ')}</p>

            <p><b>Email:</b> {member.email}</p>
            <h3>Connect</h3>
            <div className="social-links">
              <a href={member.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={member.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>


          {/* RIGHT SIDE */}
          <div className="member-image-section">
            <img
              src={member.photo}
              alt={member.name}
              className="member-details-photo"
              onClick={() => setIsOpen(true)}   // ✅ FIXED
            />

            <button className="resume-btn" onClick={() => setIsOpen(true)}>
              Show Resume
            </button>
          </div>

        </div>

        {/* LIGHTBOX */}
        {isOpen && (
          <div className="lightbox" onClick={() => setIsOpen(false)}>
            <img
              src={member.resume}
              alt="resume"
              className="lightbox-img"
            />
          </div>
        )}

      </div>
    );
}
