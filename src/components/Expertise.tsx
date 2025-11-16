import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "Python", "SQL", "Apache Airflow", "DBT", "Docker", "Git",
];

const labelsSecond = [
  "Pandas", "NumPy", "Power BI", "Tableau", "Excel", "Looker Studio",
];

const labelsThird = [
    "Google Cloud", "AWS", "Azure", "Linux",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Compétences </h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Data Engineering</h3>
                    <p>Conception et automatisation de pipelines de données fiables. Maîtrise des outils d’orchestration (Airflow, DBT) pour transformer et charger les données dans des environnements conteneurisés.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3> Data Analysis & Business Intelligence</h3>
                    <p>
                        Analyse exploratoire et création de tableaux de bord interactifs. <br></br>Transformation de données brutes en indicateurs clairs pour guider les décisions métiers.

                      
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                     <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud & DevOps</h3>
                    <p> Déploiement et supervision d’infrastructures data sur le cloud. Intégration continue et optimisation des performances dans des environnements sécurisés et scalables.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;