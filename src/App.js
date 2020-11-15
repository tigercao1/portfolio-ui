import React from 'react';
import './App.scss';
import FirstPanel from './components/FirstPanel/FirstPanel';
import SecondaryTitle from './components/SecondaryTitle/SecondaryTitle';
import SkillPanel from './components/SkillPanel/SkillPanel';
import Titlebar from './components/Titlebar/Titlebar';
import Footbar from './components/Footbar/Footbar';
import { EducationCard, ExperienceCard } from './components/Card/Card';
import { faJava, faJs, faHtml5, faPython, faGitAlt, faSass, faReact, faJenkins, faSwift, faDocker, faLinkedin, faGithubSquare, faInstagramSquare} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myLogo from './assets/images/tiger-icon-png-29.jpg';
import myImage from './assets/images/my_photo.png';
import carletonLogo from './assets/images/carleton_logo.png';
import solaceLogo from './assets/images/Solace-logo-green.png';
import trendMicroLogo from './assets/images/trendmicro.png'

function App() {

  let experience = [
    {
      title: "Junior Software Developer",
      company: "Solace Corporation",
      companyLogo: solaceLogo,
      content: [
        "Implemented a REST controller in a Spring Boot microservice",
        "Added dependency injection to improve code performance",
        "Implemented features in a single page application involving State, Effect-Hook and React Hook Form"
      ]
    },
    {
      title: "Java Software Developer Intern",
      company: "Trend Micro",
      companyLogo: trendMicroLogo,
      content: [
        "Constructed a Jenkins pipeline deploys production version product onto a Kubernetes cluster and performs upgrade test before an upgrade is rolled out",
        "Greatly improved deployment flow by automating manual pre-upgrade tests, upgrade process and post-upgrade tests"
      ]
    },
    {
      title: "Junior Software Developer",
      company: "Solace Corporation",
      companyLogo: solaceLogo,
      content: [
        "Feature development on single page application using Aurelia JavaScript Framework",
        "Implemented a Cloud Formation template enables static website hosting on S3 bucket",
        "Utilized Cloud Front for API routing and Route 53 which enabled deployment of the production single page application on AWS",
        "Implemented new REST endpoints to update service name, service parameters, retrieve service specifications, create new services involving JPQL and MySQL database",
        "Wrote Ansible scripts automating EC2 generation",
        "Used Git daily for project version controls"
      ]
    },
  ];

  return (
    <div className="App">
      <Titlebar logo={myLogo}>
        <div>Projects</div>
      </Titlebar>
      
      <div className="app-body">
        <FirstPanel img={myImage}>
          <a href="https://www.linkedin.com/in/yizhang-tiger-cao"><FontAwesomeIcon icon={faLinkedin}/></a>
          <a href="https://github.com/tigercao1"><FontAwesomeIcon icon={faGithubSquare}/></a>
          <a href="https://www.instagram.com/yizhang.cao/"><FontAwesomeIcon icon={faInstagramSquare}/></a>
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
        {experience.map(e => {
          return <ExperienceCard
            title={e.title}
            company={e.company}
            companyLogo={e.companyLogo}
            content={e.content}
          ></ExperienceCard>
        })
        }

      </div>
      <Footbar></Footbar>
    </div>
  );
}

export default App;
