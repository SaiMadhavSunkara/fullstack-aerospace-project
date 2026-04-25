import React from 'react';
import { useParams } from 'react-router-dom';
import './ResumePage.css';

const resumePhotos = {
  sai: './resumes/sai_resume.png',
  kondareddy: './resumes/kondareddy_resume.png',
  billa: './resumes/billa_resume.png',
  ranga: './resumes/ranga_resume.png',
};

export default function ResumePage() {
  const { name } = useParams();
  const photo = resumePhotos[name];

  if (!photo) return <h2>Resume not found</h2>;

  return (
    <div className="resume-container">
      <img src={photo} alt={`${name} resume`} className="resume-photo" />
    </div>
  );
}
