import React from 'react';
import './App.scss';
import FirstPanel from './components/FirstPanel/FirstPanel';
import SecondaryTitle from './components/SecondaryTitle/SecondaryTitle';
import SkillPanel from './components/SkillPanel/SkillPanel';
import Titlebar from './components/Titlebar/Titlebar';
import { EducationCard, ExperienceCard } from './components/Card/Card';
import { faJava, faJs, faHtml5, faPython, faGitAlt, faSass, faReact, faJenkins, faSwift, faDocker, faLinkedin, faGithubSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myLogo from './assets/images/tiger-icon-png-29.jpg';
import myImage from './assets/images/my_photo.png';
import carletonLogo from './assets/images/carleton_logo.png';
import solaceLogo from './assets/images/Solace-logo-green.png'

function App() {
  return (
    <div className="App">
      <Titlebar logo={myLogo}>
        <div>Projects</div>
      </Titlebar>
      
      <div className="app-body">
        <FirstPanel img={myImage}>
          <FontAwesomeIcon icon={faLinkedin}/>
          <FontAwesomeIcon icon={faGithubSquare}/>
          <FontAwesomeIcon icon={faInstagramSquare}/>
        </FirstPanel>
        <SecondaryTitle>Education</SecondaryTitle>
        <EducationCard img={carletonLogo}>Currently in my 4th year, studying Computer Science at Carleton University.</EducationCard>
        <SecondaryTitle>Skills</SecondaryTitle>
        <SkillPanel>
          <FontAwesomeIcon icon={faJava}/>
          <FontAwesomeIcon icon={faJs}/>
          <FontAwesomeIcon icon={faHtml5}/>
          <FontAwesomeIcon icon={faPython}/>
          <FontAwesomeIcon icon={faGitAlt}/>
          <FontAwesomeIcon icon={faSass}/>
        </SkillPanel>
        <SkillPanel>
          <FontAwesomeIcon icon={faReact}/>
          <FontAwesomeIcon icon={faJenkins}/>
          <FontAwesomeIcon icon={faSwift}/>
          <FontAwesomeIcon icon={faDocker}/>
        </SkillPanel>
        <SecondaryTitle>Experience</SecondaryTitle>
        <ExperienceCard 
          title={"Junior Software Developer"} 
          company={"Solace"} 
          companyLogo={solaceLogo}
          content={
            <ul>
              <li>Implemented a REST controller in a Spring Boot microservice</li>
              <li>Added dependency injection to improve code performance</li>
            </ul>
          }
        ></ExperienceCard>
      </div>
    </div>
  );
}

export default App;
