import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
 
// ⚠️ Mets ici le bon nom de ton fichier image
import photo from "../assets/images/profile-photo.jpg";
 
function Main() {
 
  return (
    <div className="container">
      <div className="about-section">
       
        <div className="content">
 
          {/* PHOTO AU-DESSUS DU NOM */}
          <img src={photo} alt="Photo de profil" className="profile-photo" />
 
          <div className="social_icons">
            <a href="https://github.com/HoudaAMGHAR" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/houdadataengeneer" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
 
          <h1>HOUDA AMGHAR</h1>
          <p>Data Analyst / Data Ingénieure</p>
 
          <div className="mobile_social_icons">
            <a href="https://github.com/HoudaAMGHAR" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/houdadataengeneer" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
 
        </div>
      </div>
    </div>
  );
}
 
export default Main;