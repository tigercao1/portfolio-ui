import React from 'react';
import './Card.scss';

const ExperienceCard = (props) => {
    return (
        <div className="card experience">
            <div className="left">
                <div className="text">
                    <div className="main">{props.title}</div>
                </div>
                <ul className="content">
                    {props.content.map((e, idx) => {
                        return <li key={idx}>{e}</li>;
                    })}
                </ul>
            </div>
            <div className="right">
                <a href={props.link}>
                    <img src={props.companyLogo} alt="company-logo"></img>
                </a>
            </div>
        </div>
    );
};

const EducationCard = (props) => {
    return (
        <div className="card education">
            <div className="left">
                <p>{props.children}</p>
            </div>
            <div className="right">
                <a href={props.link}>
                    <img src={props.img} alt="logo" />
                </a>
            </div>
        </div>
    );
};

export { ExperienceCard, EducationCard };
