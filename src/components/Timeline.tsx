import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Formations</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="sep 2023 - sep  2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Expert en Systèmes d'Information et Sécurité</h3>
            <h4 className="vertical-timeline-element-subtitle"> ECOLE SUP INFORM COMMERCE (ESIC) </h4>
            <h4 className="vertical-timeline-element-subtitle">RNCP 39394 - Niveau 7</h4>
            <p>
             Spécialisation en architecture des systèmes d'information, cybersécurité, data analysis et gestion de projets IT.
            </p>
          </VerticalTimelineElement>
         
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="sep 2021 - sep 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">BUT Science des Données
              </h3>
            <h4 className="vertical-timeline-element-subtitle">Université Sorbonne Paris Nord </h4>
            <h4 className="vertical-timeline-element-subtitle">RNCP Niveau 6 </h4>
            <p>
              Spécialisation en data management, analyse statistique, 
              programmation (Python, R, SQL), modélisation prédictive, Big Data et Intelligence Artificielle.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="sep 2020 - sep 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">L1 Informatique Système d'information</h3>
            <h4 className="vertical-timeline-element-subtitle">Université Sétif 1 Ferhat Abbas</h4>
            
            <p> 
               Formation pluridisciplinaire combinant algorithmique, programmation, structures de données, mathématiques appliquées, analyse numérique et statistiques pour développer une double compétence en sciences informatiques et mathématiques.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

      </div>
    </div>
  );
}

export default Timeline;