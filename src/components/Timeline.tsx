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
            date="Sept 2024– Août 2025"
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
            date="Sept 2021– Août 2024"
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
            date="Sept 2015– Août 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Infirmière de santé publique</h3>
            <h4 className="vertical-timeline-element-subtitle">Institut supérieur de formation supérieur Paramédical</h4>
            
            <p> 
               Formation en soins infirmiers comprenant la démarche clinique, les soins techniques et thérapeutiques,
                la gestion des urgences et soins critiques, ainsi que la prévention, l’éducation du patient et le travail en
                équipe pluridisciplinaire.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

      </div>
    </div>
  );
}

export default Timeline;