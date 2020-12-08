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

const carletonLink = "https://carleton.ca/"

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
      ],
      link: "https://solace.com/"
    },
    {
      title: "Java Software Developer Intern",
      company: "Trend Micro",
      companyLogo: trendMicroLogo,
      content: [
        "Constructed a Jenkins pipeline deploys production version product onto a Kubernetes cluster and performs upgrade test before an upgrade is rolled out",
        "Greatly improved deployment flow by automating manual pre-upgrade tests, upgrade process and post-upgrade tests"
      ],
      link: "https://www.trendmicro.com/en_ca/business.html"
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
      ],
      link: "https://solace.com/"
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
        <EducationCard link={carletonLink} img={carletonLogo}>Currently in my 4th year, studying Computer Science at Carleton University. Received 2016 Carleton University Entrance 
        Scholarship, 2017 Lester Bowles Pearson Scholarship, 2018 Frederick William Baldwin Scholarship. Invited to 2017 Deans' Honours List and 2018 Deans' Honour List.
        </EducationCard>
        <SecondaryTitle>Skills</SecondaryTitle>
        <SkillPanel>
          <div className="skill">
            <FontAwesomeIcon icon={faJava}/>
            <p>Java</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faJs}/>
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faHtml5}/>
            <p>HTML5</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faPython}/>
            <p>Python</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faGitAlt}/>
            <p>Git</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faSass}/>
            <p>Sass</p>
          </div>
        </SkillPanel>
        <SkillPanel>
        <div className="skill">
          <FontAwesomeIcon icon={faReact}/>
            <p>React</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faJenkins}/>
            <p>Jenkins</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faSwift}/>
            <p>Swift</p>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faDocker}/>
            <p>Docker</p>
          </div>
        </SkillPanel>
        <SecondaryTitle>Experience</SecondaryTitle>
        {experience.map(e => {
          return <ExperienceCard
            title={e.title}
            company={e.company}
            companyLogo={e.companyLogo}
            content={e.content}
            link={e.link}
          ></ExperienceCard>
        })
        }

      </div>
      <Footbar></Footbar>
    </div>
  );
}

export default App;
