import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageBackground.css';
import './Members.css';

export default function Members() {
  const navigate = useNavigate();

  const members = [
    { 
      name: 'Trafalgur Law', 
      fullName: 'Trafalgur Law', 
      domain: 'Aerospace', 
      role: 'Software Engineer', 
      logo: '/logos/sai.png',
      description: 
        'Passionate about building scalable systems and loves exploring space tech integration with AI. ' +
        'Traffy has worked on multiple aerospace-inspired software projects and specializes in cloud-native solutions. ' +
        'He believes in combining innovation with precision to solve real-world challenges.'
    },
    { 
      name: 'Light Yagami', 
      fullName: 'Light Yagami', 
      domain: 'Aerospace', 
      role: 'Software Engineer', 
      logo: '/logos/kondareddy.png',
      description: 
        'Specializes in backend services and problem solving with strong fundamentals in aerospace applications. ' +
        'Kondareddy enjoys working with distributed systems, optimizing performance, and ensuring system reliability. ' +
        'He is a quick learner who constantly adapts to new technologies and challenges.'
    },
    { 
      name: 'Gojo Satoru', 
      fullName: 'Gojo Satoru', 
      domain: 'Aerospace', 
      role: 'Scientist', 
      logo: '/logos/billa.png',
      description: 
        'Focused on research and innovations in aerospace systems with 3 years of scientific exploration. ' +
        'Billa has contributed to projects in propulsion, simulation, and advanced aerospace technology. ' +
        'He aims to bridge the gap between academic research and real-world aerospace applications.'
    },
    { 
      name: 'Naruto Uchiha', 
      fullName: 'Naruto Uchiha',  
      domain: 'Electronics', 
      role: 'Hardware Engineer', 
      logo: '/logos/ranga.png',
      description: 
        'Expert in electronic circuits and embedded systems, currently working on aerospace hardware design. ' +
        'Ranga has hands-on experience in PCB design, microcontroller programming, and hardware integration. ' +
        'His goal is to develop robust hardware solutions that power the next generation of aerospace technology.'
    },
  ];

  return (
    <>
      <div className="page-bg"></div>
      <div className="page-bg-overlay"></div>

      <div className="members-scroll-container">
        {members.map((member, index) => (
          <div 
            key={index} 
            className="member-card"
            onClick={() => navigate(`/members/${member.name}`)} 
          >
            <img src={member.logo} alt={`${member.fullName} logo`} className="member-photo-rect" />
            <div className="member-info">
              <h2>{member.fullName}</h2>
              <p><b>Role:</b> {member.role}</p>
              <p><b>Domain:</b> {member.domain}</p>
              <p className="member-desc">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
