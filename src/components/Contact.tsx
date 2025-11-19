import React from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Remplacez ces valeurs par vos propres informations
const EMAIL_ADDRESS = 'houdaamghar97@gmail.com';
const GITHUB_URL = 'https://github.com/HoudaAMGHAr'
const LINKEDIN_URL = 'https://www.linkedin.com/in/houdadataengeneer/'

function Contact() {
  // Styles pour les icônes de liens sociaux
  const socialIconStyle = {
    color: 'white',
    margin: '0 8px',
    '&:hover': {

    },
  };
  return (
    // J'utilise ici 'contact' comme ID de section, mais vous pouvez l'appeler 'hero' ou 'intro'
    <div id="contact"> 
      <div className="items-container">
        
        {/* Section principale avec le texte de présentation */}
        <Box sx={{ paddingBottom: '80px', textAlign: 'center' }}>
    
          {/* Boutons d'action (À propos de moi & Mon CV) - Vous pouvez les styliser davantage */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Link href="Data_analyst_junior.pdf" 
          
          download underline="none">
  <button className="button-secondary">
    ⬇️ Mon CV
  </button>
</Link>
          </Box>
        </Box>
        {/* Boîte de contact stylisée comme sur l'image */}
        <Box
          className="contact-info-box" // Nouvelle classe pour cibler le style dans SCSS
          sx={{
            backgroundColor: '#000', // Fond noir pour la boîte d'information
            color: 'white',
            padding: '30px',
            borderRadius: 3,
            width: '80%',
            // Limite de largeur pour la boîte d'info
            margin: '0 auto', // Centrage horizontal
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" component="h3" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
            Me contacter
          </Typography>
          
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            <Link href={`mailto:${EMAIL_ADDRESS}`} color="inherit" underline="hover">
              {EMAIL_ADDRESS}
            </Link>
          </Typography>

          <Box>
            <Link href={GITHUB_URL} target="_blank" rel="noopener" sx={socialIconStyle}>
              <GitHubIcon fontSize="large" />
              <Typography variant="body2" component="span" sx={{ verticalAlign: 'top', margin: '0 4px' }}>
                GitHub
              </Typography>
            </Link>
            <Link href={LINKEDIN_URL} target="_blank" rel="noopener" sx={socialIconStyle}>
              <LinkedInIcon fontSize="large" />
              <Typography variant="body2" component="span" sx={{ verticalAlign: 'top', margin: '0 4px' }}>
                LinkedIn
              </Typography>
            </Link>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Contact;