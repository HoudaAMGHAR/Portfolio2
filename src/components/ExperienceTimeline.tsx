import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
 

function ExperienceTimeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Expériences Professionnelles</h1>
        <VerticalTimeline>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Septembre 2024– Septembre 2025"
 
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
           
          >
     
            <h3 className="vertical-timeline-element-title">Data Analyst (Alternance)</h3>
            <h4 className="vertical-timeline-element-subtitle">Centre Hospitalier de Rambouilliet, Paris</h4>
            <p>
              <ul>
                <li>Conception de plus de 25 tableaux de bord interactifs sous Power BI et SAP BO Webi sur l’activité hospitalière : urgences, séjours, taux d’occupation, passages au bloc et consultations externes.</li>
                <li>Automatisation complète des rapports transmis à l’ARS via des flux sécurisés.</li>
                <li>Participation à 3 projets de migration de systèmes métiers, incluant l’extraction, la transformation et le chargement (ETL) des historiques patients.</li>
              </ul>
 
               <p><strong>Outils :</strong> SAP BO Webi, Power BI, SQL, Python, Flux SFTP sécurisés</p>
            </p>
 
          </VerticalTimelineElement>
                   
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2024– Août 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst (Alternance)</h3>
            <h4 className="vertical-timeline-element-subtitle">Centre Hospitalier Léon Binet, Provins-Paris</h4>
            <p>
                <ul>
                    <li>Automatisation de la génération et de la diffusion hebdomadaire des indicateurs de performance vers les
                        directions médicale et financière.</li>
                    <li>Mise en place d’un data pipeline (SQL + Python) pour le suivi en temps réel des lits disponibles et des
                        durées moyennes de séjour.
                    </li>
                    <li>Réalisation d’analyses ad hoc à la demande de la direction et des chefs de service : délais de prise en charge,
                    taux de réadmission, durée moyenne d’attente aux urgences.</li>
                </ul>
                 <p><strong>Outils :</strong> Power BI, SAP BO Webi, SQL Server, Python (pandas, matplotlib), Excel, DxCare, PMSI, Flux SFTP
                        sécurisés</p>
            </p>
 
          </VerticalTimelineElement>
 
          

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Septembre 2020 – Août 2021"
 
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
           
          >
     
            <h3 className="vertical-timeline-element-title">Infirmière de réanimation</h3>
            <h4 className="vertical-timeline-element-subtitle">CHU de Sétif, Algérie</h4>
            <p>
              <ul>
                <li>Gestion et surveillance des dispositifs invasifs : sondes, cathéters centraux, drains, lignes artérielles, pompes
                    et seringues automatiques.</li>
                <li>Réalisation d’actes techniques spécialisés : aspirations trachéales, soins de trachéotomie, prélèvements
                    artériels/veineux, gestion de la ventilation assistée.</li>
                <li>Mise en œuvre des traitements complexes : titration des drogues vasoactives, adaptation des perfusions
                    continues, préparation et administration de thérapeutiques d’urgence.
                </li>
              </ul>
            </p>
 
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Septembre 2018 - Août 2020"
 
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
           
          >
     
            <h3 className="vertical-timeline-element-title">Infirmière en USC post-opératoire</h3>
            <h4 className="vertical-timeline-element-subtitle">Centre de lutte contre le cancer, Sétif-Algérie</h4>
            <p>
              <ul>
                <li>Surveillance rapprochée des constantes, de la douleur et de l’état de conscience après intervention.</li>
                <li>Gestion des drains, pansements, perfusions et contrôle des effets secondaires liés à l’anesthésie.</li>
                <li>Mise en œuvre du protocole post-opératoire : mobilisation précoce, prévention des complications, édu
                      ation du patient et coordination avec l’équipe chirurgicale.
                </li>
              </ul>
            </p>
 
          </VerticalTimelineElement>
 
        </VerticalTimeline>
      </div>
    </div>
  );
}
 
export default ExperienceTimeline;